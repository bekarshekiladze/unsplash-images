import { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export function SearchContextProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Should Use SearchContext context inside a provider`);
  }
  return context;
}
