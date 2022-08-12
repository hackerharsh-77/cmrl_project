import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Redirect from "./components/Redirect/Redirect";
import Footer from "./components/Footer/Footer";
import Page2 from "./components/Page2/Page2";
import Station from "./components/Station/Station";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";
// axios.defaults.baseURL = "http://localhost:7777/app/";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="redirect" element={<Redirect />} />
          <Route path="station" element={<Station />} />
          <Route path="feedback" element={<Feedback />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
