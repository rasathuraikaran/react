import { useState } from "react";

function Schooter() {
 const [Schooter, setSchooter] = useState({
  Color: "Red",
  Brand: "Tesla",
  Model: "1X200",
  Year: "2000",
 });

 function updatecolor() {
  return setSchooter((previousState) => {
   return { ...previousState, Color: "white" };
  });
 }

 return (
  <div>
   <h1>My schooter</h1>
   <p>Color : {Schooter.Color}</p>
   <p>Brand : {Schooter.Brand}</p>
   <p>Model : {Schooter.Model}</p>
   <p>Year : {Schooter.Year}</p>
   <button onClick={updatecolor}>change color</button>
  </div>
 );
}

export default Schooter;
