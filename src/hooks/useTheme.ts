import { createContext, useContext } from "react";
import { ThemeContextType } from "src/models/theme";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  };