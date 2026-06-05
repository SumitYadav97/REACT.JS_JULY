
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/style.scss";
import './css/style.css'
import ProductRootlayout from "./layout/ProductRoot";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />


          <Route path="product" element={<ProductRootlayout />}>
            <Route index element={<ProductDetail />} />
            <Route path=":category" element={<ProductDetail />} />
          </Route>

          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Profile" element={<Profile />} />
                    <Route path="Wishlist" element={<Wishlist />} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;