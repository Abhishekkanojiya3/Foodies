import "./index.css";
import { ThemeProvider } from "./utils/themeContext";
import LanguageProvider from "./utils/languageContext";
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
import Profile from "./components/Profile";

function Footer() {
  return (
    <>
      <h1>Footer</h1>
    </>
  );
}

function App() {

  return (
    <LanguageProvider>
    <ThemeProvider>
    <BrowserRouter>
      <div className="Appp">
      <Header />
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} >
            <Route path ="profile" element = {<Profile/>} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path = "/login" element = {<Login/>} />
            <Route path="/restaurant/:id" element={<RestaurantView />} />
        </Routes>
       <Footer />
      </div>
    </BrowserRouter>
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
