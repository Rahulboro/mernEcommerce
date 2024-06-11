import "./App.css";
import Navbar from "./Componects/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignUp from "./Pages/LoginSignUp";
import Cart from "./Pages/Cart";
import Footer from "./Componects/Footer/Footer";
import men_banner from "./Componects/assets/banner/menbanner.png";
import womens_banner from "./Componects/assets/banner/womenbanner.png";
import kids_banner from "./Componects/assets/banner/kidsbanner.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          ></Route>
          <Route
            path="/womens"
            element={<ShopCategory banner={womens_banner} category="women" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
