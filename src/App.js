import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import "./App.css"
import axios from 'axios'
// axios.defaults.baseURL = "http://localhost:7777/app/";
const App = () => {
    return (
        <div >
            <Navbar/>
            {<Home/>}
            <Footer />
        </div>
    )
}

export default App