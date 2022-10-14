import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./index.css";
import Rasm1 from '../src/assets/images/akar-icons_search.png'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Footer />
  </React.StrictMode>
);
