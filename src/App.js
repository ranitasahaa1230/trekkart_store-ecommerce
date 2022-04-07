import "./App.css";
import { NavigationRoutes } from "./routes/NavigationRoutes";
import { Footer, Navbar, Toast } from "./component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toast />
      <NavigationRoutes />
      <button
        className="button button-floating"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        {" "}
        <i className="fas fa-arrow-up"></i>
      </button>
      <Footer />
    </div>
  );
}

export default App;
