import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Only 2 possible values

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
