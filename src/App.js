import "./App.css";
import React, { useState } from "react";
function App() {
 const [term, setTerm] = useState("");

 function handleChange(e) {
  setTerm(e.target.value);
 }
 return (
  <div className="container">
   <div className="header">
    <label htmlFor="term">Guess the number between 1-10</label>
    <br />
    <input type="text" id="term" name="term" onChange={handleChange} />
   </div>
  </div>
 );
}
export default App;
