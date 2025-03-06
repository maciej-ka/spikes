import * as React from "react";
import { createObserver } from "./QueryClient.js"

const QueryClientContext = React.createContext();

export function QueryClientProvider({ client, children }) {
  return (
    <QueryClientContext.Provider value={client}>
      {children}
    </QueryClientContext.Provider>
  );
}

export function useQuery(options) {
  const queryClient = React.useContext(QueryClientContext);
  const observerRef = React.useRef();

  if (!observerRef.current) {
    observerRef.current = createObserver(queryClient, options);
  }

  return React.useSyncExternalStore(
    observerRef.current.subscribe,
    observerRef.current.getSnapshot
  );
}
