export function removeFromStorage(key: string) {
  localStorage.removeItem(key);
}

class StorageSingleton {
  private static instance: Readonly<StorageSingleton>;

  private constructor() {}

  public static getInstance(): Readonly<StorageSingleton> {
    if (!StorageSingleton.instance) {
      StorageSingleton.instance = Object.freeze(new StorageSingleton());
    }

    return StorageSingleton.instance;
  }

  clear() {
    localStorage.clear();
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  getItem<T>(key: string, defaultValue: T): T {
    try {
      const items = localStorage.getItem(key);
      return items == null ? defaultValue : JSON.parse(items);
    } catch (error) {
      return defaultValue;
    }
  }

  setItem<T>(key: string, state: T) {
    try {
      const serialized = JSON.stringify(state);
      localStorage.setItem(key, serialized);
    } catch {
      // later fix this to show helpful message to the user
      return;
    }
  }

  isAvailable(type: 'localStorage' | 'sessionStorage') {
    let storage: Storage | null = null;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
}

export const storage = StorageSingleton.getInstance();

// interface ObserverType<T> {
//   observers: Set<(data?: T) => void>;
//   notify(data?: T): void;
//   subscribe(callback: (data?: T) => void): () => void;
// }

// const Observable = Object.freeze({
//   observers: new Set(),
//   notify(data) {
//     this?.observers?.forEach((observer) => data ? observer(data) : observer());
//   },
//   subscribe(callback: () => void) {
//     this.observers.add(callback);
//     return () => {
//       this.observers.delete(callback);
//     };
//   },
// });

// Observable.notify();
