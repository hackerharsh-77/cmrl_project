import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Redirect from "./components/Redirect/Redirect";
import Footer from "./components/Footer/Footer";
import Page2 from "./components/Page2/Page2";
import Station from "./components/Station/Station";
// import ThankYou from "./components/ThankYou/ThankYou";
import Feedback from "./components/Feedback/Feedback";
import FeedbackStudent from "./components/FeedbackStudent/FeedbackStudent";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";
import ThankYou from "./components/ThankYou/ThankYou";
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
          <Route path="/feedback_student" element={<FeedbackStudent />} />
          <Route path="/thankYou" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
