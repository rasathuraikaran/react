import { useState } from "react";
function FavouriteColor() {
 const [color, setColor] = useState("red");
 return (
  <div>
   <h1>My favourite color is {color}</h1>
   <button onClick={() => setColor("blue")}>change color</button>
  </div>
 );
}
export default FavouriteColor;
