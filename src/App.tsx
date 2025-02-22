/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home count={count} setCount={setCount} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import "./App.css";
import { User } from "./types/User";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Skapa ett användarobjekt som ska skickas till Home
  const user: User = {
    name: "Alice",
    age: 25,
  };

  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home count={count} setCount={setCount} user={user} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
