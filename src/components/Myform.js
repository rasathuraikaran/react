import { useState } from "react";
function Myform() {
 const [inputs, setInputs] = useState({});
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
    Enter your name :{" "}
    <input
     type="text"
     onChange={(event) => setInputs({ name: event.target.value })}
    />
   </label>
   <br />
   <label>
    Enter your Age :{" "}
    <input
     type="age"
     onChange={(event) => setInputs({ age: event.target.value })}
    />
   </label>
   <br />
   <label>
    Enter your Email :{" "}
    <input
     type="email"
     onChange={(event) => setInputs({ email: event.target.value })}
    />
   </label>

   <br />
   <input type="submit" value="Submit form " />
   <br />
   <label htmlFor="">Count {count}</label>
   <br />
   <label htmlFor="">The name is {inputs.name}</label>
   <br />
   <label htmlFor="">The AGE is {inputs.age}</label>
   <br />
   <label htmlFor="">The Email is {inputs.email}</label>
  </form>
 );
}
export default Myform;
