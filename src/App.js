import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Page2 from './components/Page2/Page2'
import Station from './components/Station/Station'
import Feedback from './components/Feedback/Feedback'
import "./App.css"

const App = () => {
    return (
        <div >
            <Navbar/>
            {/* <Home/> */}
            {/* <Page2 /> */}
            {/* <Station /> */}
            <Feedback />
            <Footer />
            
        </div>
    )
}

export default App