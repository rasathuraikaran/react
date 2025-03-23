import { useState } from "react";
function Myform() {
 const [name, setName] = useState("");
 return (
  <form>
   <label>
    {" "}
    Enter your name :{" "}
    <input type="text" onChange={(event) => setName(event.target.value)} />
   </label>
   <label htmlFor="">The name is {name}</label>
  </form>
 );
}
export default Myform;
