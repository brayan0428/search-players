import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [players, setPlayers] = useState(null);
  const [paginator, setPaginator] = useState({
    prevPage: null,
    nextPage: 2,
    page: 1,
  });
  return (
    <AppContext.Provider
      value={{ players, setPlayers, paginator, setPaginator }}
    >
      {children}
    </AppContext.Provider>
  );
}
