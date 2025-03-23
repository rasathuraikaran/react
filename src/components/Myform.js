import { useState } from "react";
function Myform() {
 const [inputs, setInputs] = useState({ number: "+94", country: "Sri Lanka" });
 const [count, setCount] = useState(0);
 function handleSub(e) {
  e.preventDefault();
  setCount((previousState) => {
   return previousState + 1;
  });
 }

 function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  return setInputs((previousState) => {
   return { ...previousState, [name]: value };
  });
 }
 return (
  <form onSubmit={handleSub}>
   <label>
    Enter your name : <input type="text" name="name" onChange={handleChange} />
   </label>
   <br />
   <label>
    Enter your Age : <input type="age" name="age" onChange={handleChange} />
   </label>
   <br />
   <label>
    Enter your Email :{" "}
    <input type="email" name="email" onChange={handleChange} />
   </label>
   <br />
   <label>
    Enter your Phone Number :{" "}
    <input
     type="text"
     name="number"
     value={inputs.number}
     onChange={handleChange}
    />
   </label>

   <br />

   <br />
   <label>
    Enter your Country :{" "}
    <select type="text" name="country" onChange={handleChange}>
     <option value="Australia">Austalia</option>
     <option value="India">India</option>
     <option value="China">China</option>
     <option value="Srilanka">Srilanka</option>
    </select>
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
   <br />
   <label htmlFor="">The number is {inputs.number}</label>

   <br />
   <label htmlFor="">The country is {inputs.country}</label>
  </form>
 );
}
export default Myform;
