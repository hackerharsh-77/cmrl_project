import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Page2 from './components/Page2/Page2'
import Station from './components/Station/Station'
import Feedback from './components/Feedback/Feedback'
import "./App.css"

import axios from 'axios'
// axios.defaults.baseURL = "http://localhost:7777/app/";

const App = () => {
    return (
        <div >
            <Navbar/>
            {/* <Home/> */}
            {/* <Page2 /> */}
            {/* <Station /> */}
            {<Feedback />}
            {<Home/>}
            <Footer />
            
        </div>
    )
}

export default App