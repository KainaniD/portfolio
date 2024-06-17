import { createContext, useState } from "react";
import Navbar from "./Navbar";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");
  const [animationPlaying, setAnimationPlaying] = useState(false);

  const toggleTheme = () => {
    if (animationPlaying === false){
      setAnimationPlaying(true);
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
      document.getElementById("toggle").classList.add("pop-in");
      setTimeout(()=>{
      document.getElementById("toggle").classList.remove("pop-in");
      setAnimationPlaying(false);
      }, 500);
    }
  }

  return (

  <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <div id={theme} className="w-full h-full my-0 mx-0">
        <Navbar />
        <div className="h-dvh">
          <div className="h-40"></div>
          <img id="toggle" className="mode-toggle mx-auto" onClick={toggleTheme}></img>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
