import React from "react";

class Bike extends React.Component {
 constructor() {
  super();
  this.state = { color: "red" };
 }

 render() {
  return (
   <div>
    <h1>my bike is beautiful and color is {this.state.color}</h1>
    <button onClick={() => this.setState({ color: "Blue" })}>
     Change color bro
    </button>
   </div>
  );
 }
}
export default Bike