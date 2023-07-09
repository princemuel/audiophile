// import { produce } from 'immer';
// import { create } from 'zustand';
// import { devtools, redux } from 'zustand/middleware';
// import { createBoundedUseStore } from '../helpers';

// interface ICartState {
//   show: boolean;
//   items: CartItem[];
//   total: number;
//   quantity: number;
// }

// type Action =
//   | { type: 'cart/cartOpened' }
//   | { type: 'cart/cartClosed' }
//   | { type: 'cart/cartToggled' }
//   | { type: 'cart/itemAdded'; payload: IProduct }
//   | { type: 'cart/itemUpdated'; payload: CartItem }
//   | { type: 'cart/cartSubmitted' };

// const reducer = produce((draft: ICartState, action: Action) => {
//   switch (action.type) {
//     case 'cart/cartOpened':
//       draft.show = true;
//       break;

//     case 'cart/cartClosed':
//       draft.show = false;
//       break;

//     case 'cart/cartToggled':
//       draft.show = !draft.show;
//       break;

//     case 'cart/itemAdded':
//       if (!action.payload)
//         throw new ReferenceError(`payload missing in '${action.type}' action`);

//       const {
//         slug,
//         name,
//         price,
//         categoryImage: { mobile },
//       } = action.payload;

//       const itemInCart = draft.items.find((product) => product.slug === slug);

//       //! make sure there isn't a bug here
//       const quantity = itemInCart ? itemInCart.quantity + 1 : 1;
//       itemInCart
//         ? (itemInCart.quantity = quantity)
//         : draft.items.push({ slug, name, price, quantity, image: mobile });

//       localStorage.setItem('cart', JSON.stringify(draft.items));
//       break;

//     default: {
//       //@ts-expect-error
//       throw new TypeError(`Unhandled action type: '${action?.type}'`);
//     }
//   }
// });

// const initialState = {
//   show: false,
//   items:
//     typeof window !== 'undefined' && window?.localStorage.getItem('cart')
//       ? JSON.parse(window?.localStorage.getItem('cart') || '')
//       : [],
//   quantity: 0,
//   total: 0,
// } satisfies ICartState;

// const cartStore = create(devtools(redux(reducer, initialState)));

// export const useCartStore = createBoundedUseStore(cartStore);

export {};
