import { useCallback, useRef, useSyncExternalStore } from 'react';

export function createNewStore<Store>(initalState: Store) {
  let store = useRef(initalState);

  const subscribers = useRef(new Set<(state: Store) => void>());
  let serverState: Store | null = null;

  const subscribe = useCallback((callback: (state: Store) => void) => {
    subscribers?.current?.add(callback);
    return () => subscribers?.current?.delete(callback);
  }, []);

  const get = useCallback(() => {
    return store?.current;
  }, []);

  const set = useCallback((value: Partial<Store>) => {
    store.current = { ...store?.current, ...value };
    subscribers?.current?.forEach((callback) => callback(store?.current));
  }, []);

  const initializeServer = useCallback((initialServerState: Store) => {
    if (!serverState) {
      store.current = initialServerState;
      serverState = initialServerState;
    }
  }, []);

  const getServerState = useCallback(() => {
    return serverState ?? store?.current;
  }, []);

  return {
    get,
    set,
    subscribe,
    initializeServer,
    getServerState,
    useNewStore<T>(selector: (store: Store) => T) {
      return useSyncExternalStore(
        subscribe,
        () => selector(get()),
        () => selector(serverState ?? store?.current)
      );
    },
  };
}
