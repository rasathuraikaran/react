import React from "react";

class Bike extends React.Component {
 constructor() {
  super();
  this.state = { color: "red", model: "Alpha" };
 }

 render() {
  return (
   <div>
    <h1>
     my bike is beautiful and color is {this.state.color} and the model is{" "}
     {this.state.model}
    </h1>
    <button
     onClick={() =>
      this.setState((previousState) => {
       return { ...previousState, color: "sinnanom" };
      })
     }
    >
     Change color bro
    </button>
   </div>
  );
 }
}
export default Bike;
