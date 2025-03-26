import React from "react";

// Destructure the props to get snum and term
function Result({ snum, term }) {
 let result = ""; // Initialize result as an empty string

 // Check if the term is a valid number before proceeding
 if (term) {
  const guess = parseInt(term, 10); // Convert the term to an integer
  if (isNaN(guess)) {
   result = "Please enter a valid number!";
  } else {
   if (snum < guess) {
    result = "Lower";
   } else if (snum > guess) {
    result = "Higher";
   } else {
    result = "Success!";
   }
  }
 }

 return <h1>Your guess is {result}</h1>;
}

export default Result;
