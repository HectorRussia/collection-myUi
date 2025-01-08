import { ReactNode } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export type ChildrenProps = {
  children : ReactNode
}