import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./component";
import {
  Cart,
  Home,
  Products,
  // ProductPage,
  UserProfile,
  Wishlist,
} from "./pages";
import { Login, SignUp } from "./pages/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Navbar />
      
        			{/* <ToastContainer theme="colored" autoClose={1200} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/:productId" element={<ProductPage />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
