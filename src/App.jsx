import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./pages/Home";
import CTF from "./pages/ctf";
import About from "./pages/about";

function App() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div>
      <NavBar setScrolledState={setScrolled} />
      <main className={`${scrolled ? "pt-16" : "pt-0"}`}>
        <Home />
        <CTF />
        <About />
      </main>
    </div>
  );
}

export default App;
