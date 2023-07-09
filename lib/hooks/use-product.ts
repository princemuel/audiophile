import { produce } from 'immer';
import { create } from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { createBoundedUseStore } from '../helpers';

interface CountState {
  count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' };

const reducer = produce((draft: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'increment': {
      draft.count += 1;
      break;
    }
    case 'decrement': {
      draft.count = draft.count > 1 ? (draft.count -= 1) : 1;
      break;
    }
    default: {
      //@ts-expect-error
      throw new TypeError(`Unhandled action type: '${action?.type}'`);
    }
  }
});

const initialState = {
  count: 1,
} satisfies CountState;

const countStore = create(devtools(redux(reducer, initialState)));

export const useCountStore = createBoundedUseStore(countStore);
