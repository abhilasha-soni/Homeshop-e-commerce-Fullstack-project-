import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/footer/Footer";
import Locations from "./pages/Locations";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import ContactUs from "./pages/ContactUs";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./components/products/ProductDetail";
import Departmentpage from "./pages/Departmentpage";
import Collections from "./pages/Collections";
import UserLoginPage from "./pages/UserLoginPage";
import NewUser from "./components/userLogin/NewUser";
import AccountUpdate from "./components/userLogin/AccountUpdate";
import OrderList from "./components/orders/OrderList";
import CartCheckout from "./pages/CartCheckout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/products/department/:id"
          element={<Departmentpage/>}
        ></Route>
        <Route
          path="/products/category/:name"
          element={<CategoriesPage />}
        ></Route>
        <Route
          path="/products/collection/:badge"
          element={<Collections/>}
        ></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<UserLoginPage/>}></Route>
        <Route path="/newUser" element={<NewUser/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/locations" element={<Locations/>}></Route>
        <Route path="/termsofuse" element={<TermsOfUse/>}></Route>
        <Route path="/privacy" element={<PrivacyPolicy/>}></Route>
        <Route path="/return" element={<ReturnPolicy/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/products/:id" element={<ProductDetail/>}></Route>
        <Route path="/accountUpdate" element={<AccountUpdate/>}></Route>
        <Route path="/orders" element={<OrderList/>}></Route>
        <Route path="/checkout" element={<CartCheckout/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
