import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { CDN_URL } from "./utils/constants";
import resList from "./utils/mockData";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantView from "./components/RestaurantView";
import Login from "./components/Login";

function Footer() {
  return (
    <>
      <h1>Footer</h1>
    </>
  );
}

function App() {

  return (
    <BrowserRouter>
      <div className="Appp">
      <Header />
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path = "/login" element = {<Login/>} />
            <Route path="/restaurant/:id" element={<RestaurantView />} />
        </Routes>
       <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
