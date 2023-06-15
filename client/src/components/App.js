import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./NavBar";
import Home from "./HomePage";
import About from "./AboutPage";
import Create from "./CreateMemes";
import Trending from "./TrendingPage";

function App() {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path="/trending" element={<Trending />}/>
                <Route path="/creatememe" element={<Create />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/" element={<Home />}/>
            </Routes>    
        </Router>
        )
    }

export default App