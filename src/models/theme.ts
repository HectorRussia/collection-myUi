import { ReactNode } from "react";

export type ThemeContextType = {
  theme: "garden" | "dark";
  setTheme: (theme: "garden" | "dark") => void;
};

export type ChildrenProps = {
  children : ReactNode
}