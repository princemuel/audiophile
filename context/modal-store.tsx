import { createAStore as createModalStore } from './store';

type T = 'cart' | 'checkout';
type M = 'modal';

export type IModal = `${T}-${M}`;

interface ModalStore {
  isOpen: boolean;
  current: IModal | null;
  // toggleModal: (name: IModal) => void;
  // closeModal: () => void;
}

const { StoreProvider, useStore } = createModalStore<ModalStore>({
  isOpen: false,
  current: null,
});

export { StoreProvider as ModalProvider, useStore as useModalStore };
