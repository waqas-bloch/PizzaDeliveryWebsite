import React from "react";
import "./App.css";
import Card from "./components/Card";
import About from "./components/About";
import Clients from "./components/Clients";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Shop from "./components/Shop";
import Items from "./components/Items";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Items />
      {/* <Routes>
       <Route exact path="/" element={<Header />}/>
       <Route exact path="/menu" element={<Menu />}/>
       <Route exact path="/aboutUs" element={<About />}/>
       <Route exact path="/shop" element={<Shop />}/>
       <Route exact path="/items" element={<Items />}/>
      </Routes> */}
    </div>
  );
}

export default App;
