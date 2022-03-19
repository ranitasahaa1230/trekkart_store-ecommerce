import "./App.css";
import {Home} from "./pages";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
    </div>
  );
}

export default App;
