import { useEffect, useState } from "react";

function Timer() {
 const [count, setCount] = useState(1);

 useEffect(() => {
  console.log("screen is rendered ");
 }, [count]);

 function updateCount() {
  setCount((previousState) => previousState + 1);
 }

 return (
  <div>
   <h1>I have reddered {count}</h1>
   <button onClick={updateCount}>update count</button>
  </div>
 );
}
export default Timer
