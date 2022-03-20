import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./component/index";
import { Home, Products } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
