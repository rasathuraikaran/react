import "./App.css";
import Result from "./Result"; // Import the Result component
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
const snum = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1-10

function App() {
 const [term, setTerm] = useState(""); // State to hold the user's guess

 function handleChange(e) {
  setTerm(e.target.value); // Update the state when the user types
 }

 return (
  <div className="container">
   <BrowserRouter>
    <ul>
     <li>
      <Link to="/">Home</Link>
     </li>
     <li>
      <Link to="/a">AboutUs</Link>
     </li>
     <li>
      <Link to="/c">ContactUs</Link>
     </li>
     <li>
      <Link to="/user/1">User1</Link>
     </li>
     <li>
      <Link to="/user/2">User2</Link>
     </li>
    </ul>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/a" element={<About />} />
     <Route path="/c" element={<Contact />} />
     <Route path="/user/:id" element={<User />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;
