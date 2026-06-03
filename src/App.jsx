import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Shop_ from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Shop" element={<Shop_ />} />
          <Route path="Product" element={<ProductDetail />} />
          <Route path="Checkout" element={<Checkout />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;