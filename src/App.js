import "./App.css";
import Result from "./Result"; // Import the Result component
import React, { useState } from "react";

const snum = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1-10

function App() {
 const [term, setTerm] = useState(""); // State to hold the user's guess

 function handleChange(e) {
  setTerm(e.target.value); // Update the state when the user types
 }

 return (
  <div className="container">
   <div className="header">
    <label htmlFor="term">
     Guess the number between 1-10. Answer is {snum}
    </label>
    <br />
    <input
     type="number"
     id="term"
     name="term"
     onChange={handleChange}
     value={term}
    />
   </div>
   <Result snum={snum} term={term} />
  </div>
 );
}

export default App;
