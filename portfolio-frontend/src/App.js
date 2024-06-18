import { createContext, useState } from "react";
import Navbar from "./Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";

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
      <div id={theme} className="w-full h-full my-0 mx-0 p-4">
        <Navbar />
        <Landing toggle={toggleTheme}/>
        <About />
        <About />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
