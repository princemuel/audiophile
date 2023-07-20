export function getFromStorage<T>(key: string): T[] {
  try {
    const items = localStorage.getItem(key);
    return items == null ? [] : JSON.parse(items);
  } catch (error) {
    return [];
  }
}

export function saveToStorage<T>(state: T[], key: string) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(key, serialized);
  } catch {
    // later fix this to show helpful message to the user
    return;
  }
}
