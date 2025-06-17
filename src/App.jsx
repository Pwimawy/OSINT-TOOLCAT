import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
