import { createContext, useContext, useEffect, useState } from "react";
import { isDarkThemePreferred } from "../utils/themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemePreferred());

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
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Should Use ThemeContext context inside a provider`);
  }
  return context;
};
