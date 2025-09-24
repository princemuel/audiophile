import { createSelectors } from '@/helpers';
import {
  createJSONStorage,
  devtools,
  persist,
  redux,
} from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

const initialState = {
  cartItems: [],
} satisfies CartState;

const cartStore = createWithEqualityFn(
  devtools(
    persist(redux(reducer, initialState), {
      name: 'next-zustand-audiophile',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cartItems: state.cartItems }),
    }),
    { enabled: process.env.NODE_ENV === 'development' }
  ),
  shallow
);

const useCartStore = createSelectors(cartStore);

// const cartItems = useZustandStore(useCartStore, s => s.cartItems)

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

  switch (type) {
    case 'increment': {
      if (isInCart) dispatch({ type: 'cart/increment', payload: item });
      else dispatch({ type: 'cart/addItem', payload: item });
      break;
    }

    case 'decrement': {
      if (isInCart) {
        // TODO!: make sure to test this check
        if (isInCart.quantity <= 1) {
          dispatch({ type: 'cart/removeItem', payload: item });
        } else {
          dispatch({ type: 'cart/decrement', payload: item });
        }
      }
      break;
    }

    default: {
      throw new Error(`Unhandled parameter: '${type}' not defined`);
    }
  }
}

function clearCart(dispatch: CartDispatch) {
  dispatch({ type: 'cart/reset' });
}

//////////////////
/////////
/// EXPORTED
export { addCartItem, clearCart, removeCartItem, updateItemCount };

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
type CartDispatch = ReturnType<typeof cartDispatch>;

function reducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case 'cart/addItem': {
      const isInCart = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );

      // if in cart already, don't increment, just return the current state
      if (isInCart) return state;
      // return {
      //   ...state,
      //   cartItems: state.cartItems.map((item) =>
      //     item.slug === action.payload.slug
      //       ? { ...item, quantity: item.quantity + 1 }
      //       : item
      //   ),
      // };

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
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
      throw new Error(`Unhandled action: '${JSON.stringify(action)}'`);
    }
  }
}
