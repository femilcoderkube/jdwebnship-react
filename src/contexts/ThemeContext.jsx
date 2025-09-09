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
    topHeaderBackgroundColor: "#f8f9fa",
    headerBackgroundColor: "#3b82f6",
    footerBackgroundColor: "#1f2937",
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
  const topHeaderTextColor = useMemo(
    () => getContrastingColor(currentTheme.topHeaderBackgroundColor),
    [currentTheme.topHeaderBackgroundColor]
  );
  const headerTextColor = useMemo(
    () => getContrastingColor(currentTheme.headerBackgroundColor),
    [currentTheme.headerBackgroundColor]
  );
  const footerTextColor = useMemo(
    () => getContrastingColor(currentTheme.footerBackgroundColor),
    [currentTheme.footerBackgroundColor]
  );

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--font-family", currentTheme.fontFamily);
    root.style.setProperty("--bg-color", currentTheme.backgroundColor);
    root.style.setProperty("--text-color", textColor);
    root.style.setProperty("--button-bg", currentTheme.buttonBackgroundColor);
    root.style.setProperty("--button-text-color", buttonTextColor);
    root.style.setProperty(
      "--top-header-bg",
      currentTheme.topHeaderBackgroundColor
    );
    root.style.setProperty("--top-header-text-color", topHeaderTextColor);
    root.style.setProperty("--header-bg", currentTheme.headerBackgroundColor);
    root.style.setProperty("--header-text-color", headerTextColor);
    root.style.setProperty("--footer-bg", currentTheme.footerBackgroundColor);
    root.style.setProperty("--footer-text-color", footerTextColor);
  }, [
    currentTheme,
    textColor,
    buttonTextColor,
    topHeaderTextColor,
    headerTextColor,
    footerTextColor,
  ]);

  const value = useMemo(
    () => ({
      theme: currentTheme,
      textColor,
      buttonTextColor,
      topHeaderTextColor,
      headerTextColor,
      footerTextColor,
      setTheme: setCurrentTheme,
      setFontFamily: (fontFamily) =>
        setCurrentTheme((prev) => ({ ...prev, fontFamily })),
      setBackgroundColor: (backgroundColor) =>
        setCurrentTheme((prev) => ({ ...prev, backgroundColor })),
      setButtonBackgroundColor: (buttonBackgroundColor) =>
        setCurrentTheme((prev) => ({ ...prev, buttonBackgroundColor })),
      setTopHeaderBackgroundColor: (topHeaderBackgroundColor) =>
        setCurrentTheme((prev) => ({ ...prev, topHeaderBackgroundColor })),
      setHeaderBackgroundColor: (headerBackgroundColor) =>
        setCurrentTheme((prev) => ({ ...prev, headerBackgroundColor })),
      setFooterBackgroundColor: (footerBackgroundColor) =>
        setCurrentTheme((prev) => ({ ...prev, footerBackgroundColor })),
    }),
    [
      currentTheme,
      textColor,
      buttonTextColor,
      topHeaderTextColor,
      headerTextColor,
      footerTextColor,
    ]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
