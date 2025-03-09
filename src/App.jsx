import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import { ReactLenis, useLenis } from 'lenis/react';

function App() {
  const lenis = useLenis(({ scroll }) => {
    
  })

  return (
    <ReactLenis root>
    <div className="font-main">
      <Navbar />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
    </ReactLenis>
  );
}

export default App;
