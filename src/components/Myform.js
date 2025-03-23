import { useState } from "react";
function Myform() {
 const [name, setName] = useState("");
 const [count, setCount] = useState(0);
 function handleSub(e) {
  e.preventDefault();
  setCount((previousState) => {
   return previousState + 1;
  });
 }
 return (
  <form onSubmit={handleSub}>
   <label>
    {" "}
    Enter your name :{" "}
    <input type="text" onChange={(event) => setName(event.target.value)} />
   </label>{" "}
   <br />
   <input type="submit" value="Submit form " />
   <br />
   <label htmlFor="">Count {count}</label>
   <br />
   <label htmlFor="">The name is {name}</label>
  </form>
 );
}
export default Myform;
