import { createContext, useState } from "react";
import Navbar from "./Navbar";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    document.getElementById("toggle").classList.add("mx-auto")
  }

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <div id={theme}>
        <Navbar />
        <div className="h-dvh">
          <img id="toggle" className="mode-toggle my-40 mx-0" onClick={toggleTheme}></img>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
