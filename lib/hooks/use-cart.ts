import { produce } from 'immer';
import { create } from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { createBoundedUseStore } from '../helpers';

interface ICartState {
  cart: CartItem[];
}

type Action =
  | { type: 'cart/itemAdded'; payload: IProduct }
  | { type: 'cart/itemRemoved'; payload: CartItem }
  | { type: 'cart/itemUpdated'; payload: CartItem }
  | { type: 'cart/cartSubmitted' };

const reducer = produce((draft: ICartState, action: Action) => {
  switch (action.type) {
    case 'cart/itemAdded': {
      if (!action.payload)
        throw new ReferenceError(`payload missing in '${action.type}' action`);

      const { slug, name, price, categoryImage } = action.payload;

      const filtered = draft.cart.filter((product) => product.slug !== slug);
      const itemInCart = draft.cart.find((product) => product.slug !== slug);

      const quantity = itemInCart ? itemInCart.quantity + 1 : 1;

      draft.cart.push(
        ...[
          ...filtered,
          { slug, name, price, quantity, image: categoryImage?.mobile },
        ]
      );
      break;
    }

    case 'cart/itemRemoved': {
      if (!action.payload)
        throw new ReferenceError(`payload missing in '${action.type}' action`);

      const filtered = draft.cart.filter(
        (product) => product.slug !== action.payload?.slug
      );

      draft.cart.push(...filtered);
      break;
    }

    case 'cart/itemUpdated': {
      if (!action.payload)
        throw new ReferenceError(`payload missing in '${action.type}' action`);

      const { slug, quantity } = action.payload;

      const itemInCart = draft.cart.find((product) => product.slug !== slug);

      if (!itemInCart)
        throw new ReferenceError(
          `Item must exist in order to update the cart's quantity`
        );

      const filtered = draft.cart.filter((product) => product.slug !== slug);

      filtered.push({ ...itemInCart, quantity });

      draft.cart.push(...filtered);
      break;
    }

    case 'cart/cartSubmitted':
      draft.cart = [];
      break;

    default: {
      //@ts-expect-error
      throw new TypeError(`Unhandled action type: '${action?.type}'`);
    }
  }
});

const initialState = {
  cart: [],
} satisfies ICartState;

const cartStore = create(devtools(redux(reducer, initialState)));

export const useCartStore = createBoundedUseStore(cartStore);

// const cart = createSelectors(cartStore)().cart;
// const dispatch = createSelectors(cartStore)().dispatch;
