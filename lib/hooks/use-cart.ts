import { produce } from 'immer';
import { create } from 'zustand';
import {
  createJSONStorage,
  devtools,
  persist,
  redux,
} from 'zustand/middleware';
import { calculateTotal, createBoundedUseStore } from '../helpers';

interface CartState {
  cartItems: CartItem[];
  productQuantity: number;
  tax: number;
  subTotal: number;
  totalAmount: number;
}

// In UI, after each action, set cartItems to local storage
// storage.setItem('cart', (draft.cartItems));
type CartAction =
  //
  | { type: 'ADD_CART_ITEM'; payload: CartItem }
  | { type: 'REMOVE_CART_ITEM'; payload: string }
  | { type: 'UPDATE_CART_ITEM_COUNT'; payload: CartItem }
  | { type: 'EMPTY_CART' }
  //
  | { type: 'GET_SUB_TOTAL' }
  | { type: 'CALCULATE_TAX' }
  | { type: 'GET_TOTAL' }
  //
  | { type: 'GET_CART_LENGTH' };

const reducer = produce((draft: CartState, action: CartAction) => {
  switch (action.type) {
    //
    case 'ADD_CART_ITEM': {
      const itemIndex = draft.cartItems.findIndex(
        (item) => item.slug === action.payload.slug
      );

      if (itemIndex >= 0) {
        draft.cartItems[itemIndex].quantity = action.payload.quantity;
      } else {
        const tempProduct = { ...action.payload };
        draft.cartItems.push(tempProduct);
      }

      break;
    }

    case 'UPDATE_CART_ITEM_COUNT': {
      const itemIndex = draft.cartItems.findIndex(
        (item) => item.slug === action.payload.slug
      );

      if (itemIndex >= 0) {
        draft.cartItems[itemIndex].quantity = action.payload.quantity;
      }
      break;
    }

    case 'REMOVE_CART_ITEM': {
      const itemIndex = draft.cartItems.findIndex(
        (item) => item.slug === action.payload
      );

      if (itemIndex >= 0) draft.cartItems.splice(itemIndex, 1);
      break;
    }

    case 'EMPTY_CART': {
      draft.cartItems = [];
      break;
    }

    // TOTALS
    case 'GET_SUB_TOTAL': {
      draft.subTotal = draft.cartItems.reduce((total, item) => {
        total += calculateTotal(item.quantity, item.price);
        return total;
      }, 0);

      break;
    }
    case 'CALCULATE_TAX': {
      draft.tax = (20 / 100) * draft.subTotal;
      break;
    }
    case 'GET_TOTAL': {
      draft.totalAmount = draft.tax + draft.subTotal + 50;
      break;
    }
    // ! check this later LENGTH
    case 'GET_CART_LENGTH': {
      draft.productQuantity = draft.cartItems.reduce((total, item) => {
        total += item.quantity;
        return total;
      }, 0);
      break;
    }

    default: {
      //@ts-expect-error
      throw new ReferenceError(`Unhandled action type: '${action?.type}'`);
    }
  }
});

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

// export {};
