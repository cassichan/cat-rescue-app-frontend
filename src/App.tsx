import React from "react";
import logo from "./logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pets from "./Pages/Pets";
// import Rescues from './Pages/Rescues';
// import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> hi</h1>
       {/* <nav className="nav-bar">
        <Link to="/">
          <button className = "link-btn" type="button">Home</button></Link> */}
        {/* <Link to="/find-a-pet">Find a Pet</Link>
        <Link to="/shelters-and-rescues">Shelters and Rescues</Link> */}
      {/* </nav> */}

      {/* <Routes>
        <Route path="/" element={<Home />}></Route> */}
        {/* <Route path="/find-a-pet" element={<Pets />}></Route> */}
        {/* <Route path="/shelters-and-rescues" element={<Rescues/>}></Route> */}
      {/* </Routes> */}
      <Pets/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
