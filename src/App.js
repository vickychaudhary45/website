// import About from "./Components/About";
import "./App.css";
// import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <About /> */}
      <Project />
      <Skills />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
