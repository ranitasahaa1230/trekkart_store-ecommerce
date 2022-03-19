import "./App.css";
import Header from "./component/Header/header";
import {Home} from "./pages";
import Carouselbar from "./pages/Carousel/Carousel";

function App() {
  return (
    <div className="App">
        <Header/>
        <Carouselbar/>
        {/* <Home/> */}
    </div>
  );
}

export default App;
