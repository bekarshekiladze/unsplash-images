import { createContext, useContext, useEffect, useState } from "react";
import { isDarkThemePreferred } from "./utils/themes";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemePreferred());
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const contextValue = {
    isDarkTheme,
    toggleDarkTheme,
    searchInput,
    setSearchInput,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Should Use context inside a provider`);
  }
  return context;
};

export default GlobalContextProvider;
