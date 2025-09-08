// src/contexts/ThemeContext.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getContrastingColor } from "../utils/colorUtils";

const ThemeContext = createContext();

export function ThemeProvider({ children, theme = {} }) {
  const [currentTheme, setCurrentTheme] = useState({
    fontFamily: "system-ui, -apple-system, sans-serif",
    backgroundColor: "#ffffff",
    buttonBackgroundColor: "#007bff",
    ...theme,
  });

  const textColor = useMemo(
    () => getContrastingColor(currentTheme.backgroundColor),
    [currentTheme.backgroundColor]
  );
  const buttonTextColor = useMemo(
    () => getContrastingColor(currentTheme.buttonBackgroundColor),
    [currentTheme.buttonBackgroundColor]
  );

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--font-family", currentTheme.fontFamily);
    root.style.setProperty("--bg-color", currentTheme.backgroundColor);
    root.style.setProperty("--text-color", textColor);
    root.style.setProperty("--button-bg", currentTheme.buttonBackgroundColor);
    root.style.setProperty("--button-text-color", buttonTextColor);
  }, [currentTheme, textColor, buttonTextColor]);

  const value = useMemo(
    () => ({
      theme: currentTheme,
      setTheme: setCurrentTheme,
      setFontFamily: (fontFamily) =>
        setCurrentTheme((prev) => ({ ...prev, fontFamily })),
      setBackgroundColor: (backgroundColor) =>
        setCurrentTheme((prev) => ({ ...prev, backgroundColor })),
      setButtonBackgroundColor: (buttonBackgroundColor) =>
        setCurrentTheme((prev) => ({ ...prev, buttonBackgroundColor })),
    }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
