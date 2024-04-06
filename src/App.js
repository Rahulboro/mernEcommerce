import "./App.css";
import Navbar from "./Componects/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignUp from "./Pages/LoginSignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens"element={<ShopCategory category="mens" />}></Route>
          <Route path="/womens" element={<ShopCategory category="womens" />} ></Route>
          <Route path="/kids" element={<ShopCategory category="kids" />} ></Route>
          <Route path="/product" element={<product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
