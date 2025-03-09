import { useState } from "react";

function Schooter() {
   const  [color,setColor]= useState("Red");
   const  [brand,setBrand]= useState("Tesla");

   const  [model,setModel]= useState("1X2000");

   const  [year,setYearr]= useState("2025");


 return (
  <div>
   <h1>My schooter</h1>
   <p>Color : {color}</p>
   <p>Brand : {brand}</p>
   <p>Model : {model}</p>
   <p>Year : {year}</p>
  </div>
 );
}

export default Schooter