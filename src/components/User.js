import React from "react";
import { useParams } from "react-router-dom";
export default function User() {
   const {id}= useParams()
 return (
  <div>
   <h1>User Details</h1>
   <p>
    user is <b>{id}</b>
   </p>
  </div>
 );
}
