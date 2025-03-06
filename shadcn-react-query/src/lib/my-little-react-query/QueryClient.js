function hashKey(queryKey) {
  return JSON.stringify(queryKey)
}

export function createObserver(queryClient, options) {
  return {
    subscribe(notify) {
      const unsubscribe = queryClient.subscribe(
        (queryKey) => {
          if (
            hashKey(options.queryKey) === hashKey(queryKey)
          ) {
            notify();
          }
        }
      );

      queryClient.obtain(options);
      return unsubscribe;
    },

    getSnapshot() {
      return queryClient.get(options.queryKey)
    }
  }
}

export class QueryClient {
  constructor() {
    this.cache = new Map()
    this.listeners = new Set()
  }

  subscribe(listener) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  get(queryKey) {
    const hash = hashKey(queryKey)
    if (!this.cache.has(hash)) {
      this.set(queryKey, {
        status: "pending"
      })
    }
    return this.cache.get(hash)
  }

  set(queryKey, query) {
    const hash = hashKey(queryKey)
    this.cache.set(hash, { ...this.cache.get(hash), ...query })
    this.listeners.forEach((listener) => listener(queryKey))
  }

  async obtain({ queryKey, queryFn }) {
    try {
      if (!this.get(queryKey).promise) {
        const promise = queryFn()
        this.set(queryKey, { promise })
        const data = await promise
        this.set(queryKey, { status: "success", data, promise: undefined })
      }
    } catch(error) {
      this.set(queryKey, { status: "error", error, promise: undefined })
    }
  }
}
