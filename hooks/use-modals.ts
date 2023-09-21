import { create } from 'zustand';

type ModalState = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
};

export const useCartModal = create<ModalState>((set) => ({
  isVisible: false,
  show: () => set({ isVisible: true }),
  hide: () => set({ isVisible: false }),
  toggle: () => set((state) => ({ isVisible: !state.isVisible })),
}));

// import { createSelectors } from '@/helpers';
// import * as React from 'react';
// import { create } from 'zustand';
// import { devtools, redux } from 'zustand/middleware';

// const initialState: ModalState = {
//   modals: {},
// } satisfies ModalState;

// const modalStore = create(devtools(redux(reducer, initialState)));

// const useModalStore = createSelectors(modalStore);

// export const modalState = useModalStore.use.modals;
// export const modalDispatch = useModalStore.use.dispatch;

// ///////////////////////////////////
// ////// ACTION CREATORS
// ///////////////////////////////////
// function openModal(
//   dispatch: ModalDispatch,
//   modals: Modals,
//   modal: ModalName,
//   content: React.ReactNode
// ) {
//   // make sure this check is not unnecesssary
//   if (!modals[modal]) {
//     dispatch({ type: 'modal/register', payload: { modal } });
//   }
//   dispatch({ type: 'modal/open', payload: { modal, content } });
// }

// function closeModal(dispatch: ModalDispatch, modal: ModalName) {
//   dispatch({ type: 'modal/close', payload: { modal } });
// }

// function toggleModal(
//   dispatch: ModalDispatch,
//   modals: Modals,
//   modal: ModalName,
//   content: React.ReactNode
// ) {
//   if (!modals?.[modal]) {
//     dispatch({ type: 'modal/register', payload: { modal } });
//     dispatch({ type: 'modal/open', payload: { modal, content } });
//   } else {
//     dispatch({ type: 'modal/close', payload: { modal } });
//   }
// }

// //////////////////
// /////////
// /// EXPORTED
// export { closeModal, openModal, toggleModal };

// ///////////////////////////////////
// ////// REDUCER
// ///////////////////////////////////
// type ModalName = `--${string}`;

// type Modals = Record<
//   ModalName,
//   { isActive: boolean; content: React.ReactNode | null }
// >;

// interface ModalState {
//   modals: Modals;
// }

// type ModalAction =
//   | { type: 'modal/register'; payload: { modal: ModalName } }
//   | {
//       type: 'modal/open';
//       payload: { modal: ModalName; content: React.ReactNode };
//     }
//   | { type: 'modal/close'; payload: { modal: ModalName } };
// type ModalDispatch = React.Dispatch<ModalAction>;

// function reducer(state: ModalState, action: ModalAction) {
//   switch (action.type) {
//     case 'modal/register': {
//       return {
//         ...state,
//         modals: {
//           ...state.modals,
//           [action.payload.modal]: {
//             isActive: false,
//             content: null,
//           },
//         },
//       };
//     }

//     case 'modal/open': {
//       return {
//         ...state,
//         modals: {
//           ...state.modals,
//           [action.payload.modal]: {
//             isActive: true,
//             content: action.payload.content,
//           },
//         },
//       };
//     }

//     case 'modal/close': {
//       return {
//         ...state,
//         modals: {
//           ...state.modals,
//           [action.payload.modal]: {
//             isActive: false,
//             content: null,
//           },
//         },
//       };
//     }
//     default: {
//       //@ts-expect-error
//       throw new Error(`Unhandled action: '${action.type}'`);
//     }
//   }
// }

export {};
