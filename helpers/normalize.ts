type RuleResult = { value: unknown; done: boolean };
type Rule = (value: unknown, key: string | null, path: string[]) => RuleResult;

export class RuleBuilder {
  #keyPredicate: (key: string | null) => boolean = () => true;
  #pathPredicate: (path: string[]) => boolean = () => true;
  #typePredicate: (value: unknown) => boolean = () => true;
  #stop = false;
  #transformFn: (value: unknown) => unknown = (v) => v;

  whenKey(key: string | RegExp): this {
    this.#keyPredicate = (k) =>
      k !== null && (typeof key === 'string' ? k === key : key.test(k));
    return this;
  }

  whenPathIncludes(segment: string): this {
    this.#pathPredicate = (p) => p.includes(segment);
    return this;
  }

  whenType(type: 'string' | 'number' | 'object' | 'boolean'): this {
    this.#typePredicate = (v) => typeof v === type;
    return this;
  }

  stopHere(): this {
    this.#stop = true;
    return this;
  }

  transform(fn: (value: unknown) => unknown): Rule {
    this.#transformFn = fn;
    return (value, key, path) => {
      if (this.#keyPredicate(key) && this.#pathPredicate(path) && this.#typePredicate(value)) {
        const newVal = this.#transformFn(value);
        return { value: newVal, done: this.#stop };
      }

      return { value, done: false };
    };
  }
}

/**
 * Walks an object tree applying rules at each node
 * Uses depth-first traversal with cycle detection
 */
export function walk(
  obj: unknown,
  rules: Rule[],
  path: string[] = [],
  visited = new WeakSet()
): unknown {
  // Cycle detection - because infinite loops are for amateurs
  if (obj !== null && typeof obj === 'object' && visited.has(obj)) {
    return obj; // Return as-is to avoid cycles
  }

  // Apply all rules to current value
  let currentValue = obj;
  let shouldStop = false;

  for (const rule of rules) {
    const key = path.length > 0 ? path[path.length - 1] : null;
    const result = rule(currentValue, key, path);

    currentValue = result.value;
    if (result.done) {
      shouldStop = true;
      break;
    }
  }

  // If rules said stop, or we hit a primitive, return transformed value
  if (shouldStop || currentValue === null || typeof currentValue !== 'object') {
    return currentValue;
  }

  // Mark as visited for cycle detection
  visited.add(currentValue);

  // Recursively walk object properties
  if (Array.isArray(currentValue)) {
    const newArray = currentValue.map((item, index) =>
      walk(item, rules, [...path, String(index)], visited)
    );
    visited.delete(currentValue);
    return newArray;
  } else {
    const newObj: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(currentValue)) {
      newObj[key] = walk(value, rules, [...path, key], visited);
    }
    visited.delete(currentValue);
    return newObj;
  }
}
