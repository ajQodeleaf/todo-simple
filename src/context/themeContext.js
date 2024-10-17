import { createContext, useContext } from "react";
import { useColorMode } from "@chakra-ui/react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleTheme = () => {
    toggleColorMode();
  };

  return (
    <ThemeContext.Provider value={{ theme: colorMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
