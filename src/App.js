import React from "react";
import "./index.css"
import NavbarCom from "./conponents/NavbarCom/NavbarCom";
import Home from "./page/Home/Home";
import {Routes, Route} from "react-router-dom";
import styled from 'styled-components'
import Cards from "./page/Cards/Cards";
import AboutCom from "./conponents/AboutCom/AboutCom";
import Products from "./page/Products/Products";
import About from "./page/About/About";
import Login from "./page/login/login"
import FileInfo from "./fileInfo";


function App() {
    return (
        <NavbarStyle>
            <NavbarCom/>
            <AboutCom/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/card" element={<Cards/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/:id" element={<FileInfo/>}/>
            </Routes>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`

`

export default App;

