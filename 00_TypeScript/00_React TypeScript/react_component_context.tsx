import React, { createContext, useContext } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextProps>({ theme: "light" });

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

const UseTheme = () => {
  const { theme } = useContext(ThemeContext);
  return <h2>Current Theme: {theme}</h2>;
};

export { ThemeProvider, UseTheme };
