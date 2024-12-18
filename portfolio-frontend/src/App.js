import { createContext, useState } from "react";
import Header from "./page-elements/Header";
import Navbar from "./page-elements/Navbar";
import Footer from "./page-elements/Footer"
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
      document.getElementById("toggleText").classList.add("hidden");
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (

  <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <div id={theme} className="w-full h-full my-0 mx-0 p-4 main">
        <Header />
        <Navbar />
        <Footer />
        <Landing toggle={toggleTheme}/>
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
