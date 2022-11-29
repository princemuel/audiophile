import { createAStore as createModalStore } from './store';

type T = 'cart' | 'checkout';
type M = 'modal';

export type IModal = `${T}-${M}` | null;

interface ModalStore {
  isOpen: boolean;
  current: IModal;
  // toggleModal: (name: IModal) => void;
  // closeModal: () => void;
}

const { StoreProvider, useStore } = createModalStore<ModalStore>({
  isOpen: false,
  current: null,
});

export { StoreProvider as ModalProvider, useStore as useModalStore };
