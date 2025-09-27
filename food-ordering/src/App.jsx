import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Contact_us from "./Contact_us.jsx";
import Footer from "./Footer.jsx";
import Breakfast from "./Breakfast.jsx";
import Lunch from "./Lunch.jsx";
import Dinner from "./Dinner.jsx";
import Desserts from "./Desserts.jsx";
import Sign from "./Sign.jsx";
import MoreCards from "./MoreCards.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Cart from "./Cart.jsx";
import logo from "./Resources/logo.png";
import "./App.css";
import { useCart } from "./CartContext";


const App = () => {
  const [menu, setMenu] = useState("menu");
  const [blog, setBlog] = useState("blog");

  // Hook usage inside the component
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Router>
        <ScrollToTop />

        <nav>
          <div className="nav-container">
            <img src={logo} id="logo" alt="logo" height="120" width="190" /> 
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={() => setMenu("menu")}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={() => setBlog("blog")}
                >
                  Blogs
                </a>
              </li>
              <li>
                <Link to="/contact_us">Contact Us</Link>
              </li>
              <li>
                <Link to="/sign">
                  <i
                    className="fa-regular fa-user fa-sxl"
                    style={{ color: "white" }}
                  />
                </Link>
              </li>

              <li style={{ position: "relative" }}>
                <Link to="/cart">
                  <i
                    className="fa-solid fa-cart-shopping fa-sxl"
                    style={{ color: "#ebecf0" }}
                  />
                  {cartCount > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-10px",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50%",
                        padding: "2px 6px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <br/>
        <br/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact_us" element={<Contact_us />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/cards" element={<MoreCards />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
