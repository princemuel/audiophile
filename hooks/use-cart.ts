import { calculateTotal, createBoundedUseStore } from '@/helpers';
import { create } from 'zustand';
import {
  createJSONStorage,
  devtools,
  persist,
  redux,
} from 'zustand/middleware';

const initialState = {
  cartItems: [],
  tax: 0,
  subTotal: 0,
  productQuantity: 0, // ! check this later LENGTH
  totalAmount: 0,
} satisfies CartState;

const cartStore = create(
  devtools(
    persist(redux(reducer, initialState), {
      name: 'next-zustand',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cartItems: state.cartItems }),
    })
  )
);

export const useCartStore = createBoundedUseStore(cartStore);

export function addCartItem(dispatch: CartDispatch, item: CartItem) {
  dispatch({ type: 'ADD_CART_ITEM', payload: item });
}

export function removeCartItem(dispatch: CartDispatch, item: CartItem) {
  dispatch({ type: 'REMOVE_CART_ITEM', payload: item });
}

export function incrementItem(dispatch: CartDispatch, item: CartItem) {
  dispatch({ type: 'INCREMENT_ITEM', payload: item });
}

export function decrementItem(dispatch: CartDispatch, item: CartItem) {
  dispatch({ type: 'DECREMENT_ITEM', payload: item });
}

export function clearCartItems(dispatch: CartDispatch) {
  dispatch({ type: 'EMPTY_CART' });
}

export function computeSubTotal(state: CartState) {
  return state.cartItems.reduce((total, item) => {
    total += calculateTotal(item.quantity, item.price);
    return total;
  }, 0);
}

export function computeTax(amount: number) {
  return (20 / 100) * amount;
}

export function computeCartItemTotal(state: CartState) {
  return state.cartItems.reduce((total, item) => {
    total += item.quantity;
    return total;
  }, 0);
}

function reducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case 'ADD_CART_ITEM': {
      const isInCart = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );

      if (!isInCart)
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.slug === action.payload.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case 'REMOVE_CART_ITEM': {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.slug !== action.payload.slug
        ),
      };
    }

    case 'INCREMENT_ITEM': {
      const isInCart = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );

      if (!isInCart)
        return {
          ...state,
        };

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.slug === action.payload.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case 'DECREMENT_ITEM': {
      const isInCart = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );

      if (!isInCart)
        return {
          ...state,
        };

      if (isInCart && isInCart.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.slug === action.payload.slug
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
        //                                   === 1 ?
      } else if (isInCart && isInCart.quantity < 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.slug !== action.payload.slug
          ),
        };
      }
    }

    case 'EMPTY_CART':
      return {
        ...state,
        cartItems: [],
      };

    default: {
      //@ts-expect-error
      throw new ReferenceError(`Unhandled action type: '${action?.type}'`);
    }
  }
}

interface CartState {
  cartItems: CartItem[];
  productQuantity: number;
  tax: number;
  subTotal: number;
  totalAmount: number;
}

type CartAction =
  //
  | { type: 'ADD_CART_ITEM'; payload: CartItem }
  | { type: 'REMOVE_CART_ITEM'; payload: CartItem }
  | { type: 'INCREMENT_ITEM'; payload: CartItem }
  | { type: 'DECREMENT_ITEM'; payload: CartItem }
  | { type: 'EMPTY_CART' };
// //
// | { type: 'GET_SUB_TOTAL' }
// | { type: 'CALCULATE_TAX' }
// | { type: 'GET_TOTAL' }
// //
// | { type: 'GET_CART_LENGTH' };

type CartDispatch = (action: CartAction) => CartAction;

// import { produce } from 'immer';
// import { create } from 'zustand';
// import {
//   createJSONStorage,
//   devtools,
//   persist,
//   redux,
// } from 'zustand/middleware';
// import { calculateTotal, createBoundedUseStore } from '../helpers';

// interface CartState {
//   cartItems: CartItem[];
//   productQuantity: number;
//   tax: number;
//   subTotal: number;
//   totalAmount: number;
// }

// // In UI, after each action, set cartItems to local storage
// // storage.setItem('cart', (draft.cartItems));
// type CartAction =
//   //
//   | { type: 'ADD_CART_ITEM'; payload: CartItem }
//   | { type: 'REMOVE_CART_ITEM'; payload: string }
//   | { type: 'UPDATE_CART_ITEM_COUNT'; payload: CartItem }
//   | { type: 'EMPTY_CART' }
//   //
//   | { type: 'GET_SUB_TOTAL' }
//   | { type: 'CALCULATE_TAX' }
//   | { type: 'GET_TOTAL' }
//   //
//   | { type: 'GET_CART_LENGTH' };

// const reducer = produce((draft: CartState, action: CartAction) => {
//   switch (action.type) {
//     //
//     case 'ADD_CART_ITEM': {
//       const itemIndex = draft.cartItems.findIndex(
//         (item) => item.slug === action.payload.slug
//       );

//       if (itemIndex >= 0) {
//         draft.cartItems[itemIndex].quantity = action.payload.quantity;
//       } else {
//         const tempProduct = { ...action.payload };
//         draft.cartItems.push(tempProduct);
//       }

//       break;
//     }

//     case 'UPDATE_CART_ITEM_COUNT': {
//       const itemIndex = draft.cartItems.findIndex(
//         (item) => item.slug === action.payload.slug
//       );

//       if (itemIndex >= 0) {
//         draft.cartItems[itemIndex].quantity = action.payload.quantity;
//       }
//       break;
//     }

//     case 'REMOVE_CART_ITEM': {
//       const itemIndex = draft.cartItems.findIndex(
//         (item) => item.slug === action.payload
//       );

//       if (itemIndex >= 0) draft.cartItems.splice(itemIndex, 1);
//       break;
//     }

//     case 'EMPTY_CART': {
//       draft.cartItems = [];
//       break;
//     }

//     // TOTALS
//     case 'GET_SUB_TOTAL': {
//       draft.subTotal = draft.cartItems.reduce((total, item) => {
//         total += calculateTotal(item.quantity, item.price);
//         return total;
//       }, 0);

//       break;
//     }

//     case 'CALCULATE_TAX': {
//       draft.tax = (20 / 100) * draft.subTotal;
//       break;
//     }
//     case 'GET_TOTAL': {
//       draft.totalAmount = draft.tax + draft.subTotal + 50;
//       break;
//     }
//     // ! check this later LENGTH
//     case 'GET_CART_LENGTH': {
//       draft.productQuantity = draft.cartItems.reduce((total, item) => {
//         total += item.quantity;
//         return total;
//       }, 0);
//       break;
//     }

//     default: {
//       //@ts-expect-error
//       throw new ReferenceError(`Unhandled action type: '${action?.type}'`);
//     }
//   }
// });

// const initialState = {
//   cartItems: [],
//   tax: 0,
//   subTotal: 0,
//   productQuantity: 0, // ! check this later LENGTH
//   totalAmount: 0,
// } satisfies CartState;

// const cartStore = create(
//   devtools(
//     persist(redux(reducer, initialState), {
//       name: 'next-zustand',
//       storage: createJSONStorage(() => localStorage),
//       partialize: (state) => ({ cartItems: state.cartItems }),
//     })
//   )
// );

// export const useCartStore = createBoundedUseStore(cartStore);

// // export {};
