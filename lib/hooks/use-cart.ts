import { produce } from 'immer';
import { create } from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import {
  calculateTotal,
  createBoundedUseStore,
  getFromStorage,
} from '../helpers';

interface ICartState {
  cartItems: CartItem[];
  totalCount: number;
  tax: number;
  subTotal: number;
  totalAmount: number;
}

// In UI, after each action, set cartItems to local storage
// localStorage.setItem('cart', JSON.stringify(draft.cartItems));
type Action =
  //
  | { type: 'cart/addCartItem'; payload: CartItem }
  | { type: 'cart/increment'; payload: string }
  //
  | { type: 'cart/removeCartItem'; payload: string }
  | { type: 'cart/decrement'; payload: string }
  | { type: 'cart/removeAllItems' }
  //
  | { type: 'cart/getSubTotal' }
  | { type: 'cart/calculateTax' }
  | { type: 'cart/getTotalAmount' }
  //
  | { type: 'cart/getCartCount' };

const reducer = produce((draft: ICartState, action: Action) => {
  switch (action.type) {
    //
    case 'cart/addCartItem': {
      const itemIndex = draft.cartItems.findIndex(
        (item) => item.slug === action.payload.slug
      );

      if (itemIndex >= 0) {
        draft.cartItems[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        draft.cartItems.push(tempProduct);
      }
      break;
    }

    case 'cart/increment': {
      const itemIndex = draft.cartItems.findIndex(
        (item) => item.slug === action.payload
      );
      //! make sure there isn't a bug here
      draft.cartItems[itemIndex].quantity += 1;
      break;
    }

    case 'cart/removeCartItem': {
      const itemIndex = draft.cartItems.findIndex(
        (item) => item.slug === action.payload
      );

      if (itemIndex !== -1) draft.cartItems.splice(itemIndex, 1);
      break;
    }

    case 'cart/decrement': {
      const itemIndex = draft.cartItems.findIndex(
        (item) => item.slug === action.payload
      );

      if (draft.cartItems[itemIndex].quantity <= 0) {
        draft.cartItems[itemIndex].quantity = 0;
      } else {
        draft.cartItems[itemIndex].quantity -= 1;
      }
      break;
    }

    case 'cart/removeAllItems': {
      draft.cartItems = [];
      break;
    }

    // TOTALS
    case 'cart/getSubTotal': {
      draft.subTotal = draft.cartItems.reduce((total, item) => {
        total += calculateTotal(item.quantity, item.price);
        return total;
      }, 0);
      break;
    }
    case 'cart/calculateTax': {
      draft.tax = (20 / 100) * draft.subTotal;
      break;
    }
    case 'cart/getTotalAmount': {
      draft.totalAmount = draft.tax + draft.subTotal + 50;
      break;
    }
    case 'cart/getCartCount': {
      draft.totalCount = draft.cartItems.reduce((total, item) => {
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
  cartItems: getFromStorage<CartItem>('cart'),
  tax: 0,
  subTotal: 0,
  totalCount: 0,
  totalAmount: 0,
} satisfies ICartState;

const cartStore = create(devtools(redux(reducer, initialState)));

export const useCartStore = createBoundedUseStore(cartStore);

// export {};
