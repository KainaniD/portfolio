import { createContext, useState } from "react";
import Navbar from "./Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");
  const [animationPlaying, setAnimationPlaying] = useState(false);

  const toggleTheme = () => {
    if (animationPlaying === false){
      document.getElementById("toggleText").classList.add("hidden");
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
      <div id={theme} className="w-full h-full my-0 mx-0 p-4 main">
        <Navbar />
        <Landing toggle={toggleTheme}/>
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
