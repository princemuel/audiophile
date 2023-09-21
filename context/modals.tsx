'use client';

import * as React from 'react';

const ModalStateContext = React.createContext<ModalState | null>(null);
const ModalDispatchContext =
  React.createContext<React.Dispatch<ModalAction> | null>(null);

ModalStateContext.displayName = 'ModalStateContext';
ModalDispatchContext.displayName = 'ModalDispatchContext';

const initialState = {
  modals: {},
} satisfies ModalState;

interface Props {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: Props) => {
  const [modalState, dispatch] = React.useReducer(reducer, initialState);

  const state = React.useMemo(() => modalState, [modalState]);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export const useModalState = (modal: ModalName) => {
  const context = React.useContext(ModalStateContext);
  if (!context) {
    throw new Error('useModalState must be used within a ModalProvider');
  }

  return context.modals[modal] || { isActive: false, content: null };
};

export const useModalDispatch = () => {
  const context = React.useContext(ModalDispatchContext);
  if (!context) {
    throw new Error('useModalDispatch must be used within a ModalProvider');
  }
  return context;
};

///////////////////////////////////
////// ACTION CREATORS
///////////////////////////////////
function openModal(
  dispatch: ModalDispatch,
  modals: Modals,
  modal: ModalName,
  content: React.ReactNode
) {
  // make sure this check is not unnecesssary
  if (!modals[modal]) {
    dispatch({ type: 'modal/register', payload: { modal } });
  }
  dispatch({ type: 'modal/open', payload: { modal, content } });
}

function closeModal(dispatch: ModalDispatch, modal: ModalName) {
  dispatch({ type: 'modal/close', payload: { modal, content: null } });
}

function toggleModal(
  dispatch: ModalDispatch,
  modals: Modals,
  modal: ModalName,
  content: React.ReactNode
) {
  // if (!modals?.[modal]) {
  //   dispatch({ type: 'modal/register', payload: { modal } });
  // }

  const isActive = modals?.[modal]?.isActive;

  if (!isActive) {
    dispatch({ type: 'modal/open', payload: { modal, content } });
  } else {
    dispatch({ type: 'modal/close', payload: { modal, content: null } });
  }
}

//////////////////
/////////
/// EXPORTED
export { closeModal, openModal, toggleModal };

///////////////////////////////////
////// REDUCER
///////////////////////////////////
type ModalName = `--${string}`;

type Modals = Record<
  ModalName,
  { isActive: boolean; content: React.ReactNode | null }
>;

interface ModalState {
  modals: Modals;
}

type ModalAction =
  | { type: 'modal/register'; payload: { modal: ModalName } }
  | {
      type: 'modal/open';
      payload: { modal: ModalName; content: React.ReactNode };
    }
  | { type: 'modal/close'; payload: { modal: ModalName; content: null } };
type ModalDispatch = React.Dispatch<ModalAction>;

function reducer(state: ModalState, action: ModalAction) {
  switch (action.type) {
    case 'modal/register': {
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.modal]: {
            isActive: false,
            content: null,
          },
        },
      };
    }

    case 'modal/open': {
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.modal]: {
            isActive: true,
            content: action.payload.content,
          },
        },
      };
    }

    case 'modal/close': {
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.modal]: {
            isActive: false,
            content: action.payload.content,
          },
        },
      };
    }
    default: {
      //@ts-expect-error
      throw new Error(`Unhandled action: '${action.type}'`);
    }
  }
}
