import { StoreApi, UseBoundStore, useStore } from 'zustand';

type WithSelectors<Store> = Store extends { getState: () => infer T }
  ? Store & { use: { [K in keyof T]: () => T[K] } }
  : never;
export const createSelectors = <Store extends UseBoundStore<StoreApi<object>>>(
  _store: Store
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let key of Object.keys(store.getState())) {
    (store.use as any)[key] = () => store((s) => s[key as keyof typeof s]);
  }

  return store;
};

type ExtractState<S> = S extends { getState: () => infer X } ? X : never;
export const createBoundedUseStore = ((store) => (selector, equals) =>
  useStore(store, selector as never, equals)) as <S extends StoreApi<unknown>>(
  store: S
) => {
  (): ExtractState<S>;
  <T>(
    selector: (state: ExtractState<S>) => T,
    equals?: (a: T, b: T) => boolean
  ): T;
};
