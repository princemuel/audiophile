import { calculateTotal, createSelectors } from '@/helpers';
import { create } from 'zustand';
import {
  createJSONStorage,
  devtools,
  persist,
  redux,
} from 'zustand/middleware';

const initialState = {
  cartItems: [],
} satisfies CartState;

const cartStore = create(
  devtools(
    persist(redux(reducer, initialState), {
      name: 'next-zustand-audiophile',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cartItems: state.cartItems }),
    })
  )
);

const useCartStore = createSelectors(cartStore);

export const cartState = useCartStore.use.cartItems;
export const cartDispatch = useCartStore.use.dispatch;

///////////////////////////////////
////// ACTION CREATORS
///////////////////////////////////
function addCartItem(dispatch: CartDispatch, item: CartItem) {
  dispatch({ type: 'cart/addItem', payload: item });
}

function removeCartItem(dispatch: CartDispatch, item: CartItem) {
  dispatch({ type: 'cart/removeItem', payload: item });
}

function updateItemCount(
  dispatch: CartDispatch,
  cartItems: CartState['cartItems'],
  item: CartItem,
  type: 'increment' | 'decrement'
) {
  const isInCart = cartItems.find((cartItem) => cartItem.slug === item.slug);

  if (type === 'increment') {
    if (isInCart) {
      dispatch({ type: 'cart/increment', payload: item });
    } else {
      dispatch({ type: 'cart/addItem', payload: item });
    }
  } else if (type === 'decrement') {
    if (isInCart) {
      if (isInCart.quantity <= 1) {
        dispatch({ type: 'cart/removeItem', payload: item });
      } else {
        dispatch({ type: 'cart/decrement', payload: item });
      }
    }
  }
}

function clearCart(dispatch: CartDispatch) {
  dispatch({ type: 'cart/reset' });
}

function getCartItemCount(
  cartItems: CartState['cartItems'],
  productId: string
) {
  const cartItem = cartItems.find((item) => item.slug === productId);
  return cartItem ? cartItem.quantity : 0;
}

function computeSubTotal(state: CartState['cartItems']) {
  return calculateTotal(state);
}

function computeTax(amount: number) {
  return (20 / 100) * amount;
}

function computeNumOfCartItems(state: CartState) {
  return state.cartItems.reduce((total, item) => {
    total += item.quantity;
    return total;
  }, 0);
}

//////////////////
/////////
/// EXPORTED
export {
  addCartItem,
  calculateTotal,
  clearCart,
  computeNumOfCartItems,
  computeSubTotal,
  computeTax,
  getCartItemCount,
  removeCartItem,
  updateItemCount,
};

///////////////////////////////////
////// REDUCER
///////////////////////////////////
interface CartState {
  cartItems: CartItem[];
}
type CartAction =
  | { type: 'cart/addItem'; payload: CartItem }
  | { type: 'cart/removeItem'; payload: CartItem }
  | { type: 'cart/increment'; payload: CartItem }
  | { type: 'cart/decrement'; payload: CartItem }
  | { type: 'cart/reset' };
type CartDispatch = (action: CartAction) => CartAction;

function reducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case 'cart/addItem': {
      const isInCart = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );

      if (isInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.slug === action.payload.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case 'cart/removeItem': {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.slug !== action.payload.slug
        ),
      };
    }

    case 'cart/increment': {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.slug === action.payload.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case 'cart/decrement': {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.slug === action.payload.slug
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }

    case 'cart/reset': {
      return {
        ...state,
        cartItems: [],
      };
    }

    default: {
      //@ts-expect-error
      throw new ReferenceError(`Unhandled action type: '${action?.type}'`);
    }
  }
}
