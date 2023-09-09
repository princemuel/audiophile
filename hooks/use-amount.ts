import { create } from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { createBoundedUseStore } from '../helpers';

type Action = { type: 'increment' } | { type: 'decrement' };
interface State {
  quantity: number;
}

const reducer = (amount: number) => (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { quantity: state.quantity + amount };
    case 'decrement':
      return { quantity: state.quantity > 0 ? state.quantity - amount : 0 };
    default:
      //@ts-expect-error
      throw new TypeError(`Unhandled action type: '${action?.type}'`);
  }
};

const countStore = create(devtools(redux(reducer(1), { quantity: 0 })));

export const useAmount = createBoundedUseStore(countStore);
