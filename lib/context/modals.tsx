'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type ICurrentModalState = ReturnType<typeof useCurrentModal>[0] | undefined;
type ISetCurrentModalState = ReturnType<typeof useCurrentModal>[1] | undefined;

type IModalsState = ReturnType<typeof useModalState>[0] | undefined;
type ISetModalsState = ReturnType<typeof useModalState>[1] | undefined;

const CurrentModalContext = createContext<ICurrentModalState>(undefined);
const SetCurrentModalContext = createContext<ISetCurrentModalState>(undefined);
const ModalsContext = createContext<IModalsState>(undefined);
const SetModalsContext = createContext<ISetModalsState>(undefined);

interface IModalState extends Record<string, React.JSX.Element> {}

interface Props {
  children: React.ReactNode;
}

const useCurrentModal = () => useState('');
const useModalState = () => useState<IModalState>();

export const ModalProvider = ({ children }: Props) => {
  const [currentModal, setCurrentModal] = useCurrentModal();
  const [modals, setModals] = useModalState();

  return (
    <ModalsContext.Provider value={modals}>
      <SetModalsContext.Provider value={setModals}>
        <CurrentModalContext.Provider value={currentModal}>
          <SetCurrentModalContext.Provider value={setCurrentModal}>
            {currentModal && modals?.[currentModal]}
            {children}
          </SetCurrentModalContext.Provider>
        </CurrentModalContext.Provider>
      </SetModalsContext.Provider>
    </ModalsContext.Provider>
  );
};

export function useModal() {
  const modals = useContext(ModalsContext);
  const setModals = useContext(SetModalsContext);
  const currentModal = useContext(CurrentModalContext);
  const setCurrentModal = useContext(SetCurrentModalContext);

  // if (
  //   modals == undefined ||
  //   setModals == undefined

  //   // || currentModal == undefined ||
  //   // setCurrentModal == undefined
  // ) {
  //   throw new ReferenceError(`useModal must be used in a ModalsProvider`);
  // }

  const register = useCallback(
    (name: string, Component: JSX.Element) => {
      if (!modals?.[name]) {
        setModals?.((state) => ({ ...state, [name]: Component }));
      }
    },
    [modals, setModals]
  );

  const open = useCallback(
    (name: string) => {
      setCurrentModal?.(name);
    },
    [setCurrentModal]
  );

  const close = useCallback(() => {
    setCurrentModal?.('');
  }, [setCurrentModal]);

  const toggle = useCallback(
    (name: string) => {
      if (currentModal === name) return setCurrentModal?.('');
      return setCurrentModal?.(name);
    },
    [currentModal, setCurrentModal]
  );

  return useMemo(
    () => ({ register, open, close, toggle, currentModal }),
    [close, open, register, toggle, currentModal]
  );
}
