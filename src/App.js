import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
