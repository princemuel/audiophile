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
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export const useModalState = (modal: string) => {
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

function openModal(
  dispatch: ModalDispatch,
  state: ModalState,
  modal: string,
  content: string
) {
  if (!state.modals[modal]) {
    dispatch({ type: 'modal/register', payload: { modal } });
  }
  dispatch({ type: 'modal/open', payload: { modal, content } });
}

function closeModal(dispatch: ModalDispatch, modal: string) {
  dispatch({ type: 'modal/close', payload: { modal } });
}

//////////////////
/////////
/// EXPORTED
export { closeModal, openModal };

///////////////////////////////////
////// REDUCER
///////////////////////////////////
interface ModalState {
  modals: {
    [modal: string]: { isActive: boolean; content: React.ReactNode | null };
  };
}
type ModalAction =
  | { type: 'modal/register'; payload: { modal: string } }
  | { type: 'modal/open'; payload: { modal: string; content: React.ReactNode } }
  | { type: 'modal/close'; payload: { modal: string } };
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
            content: null,
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
