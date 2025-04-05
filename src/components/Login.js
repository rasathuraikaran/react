import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
 const navigate = useNavigate();

 function onSubmit() {
  navigate("/dashbord");
 }
 return (
  <div>
   <h1>User Login</h1>
   <button onClick={onSubmit}>Login</button>
  </div>
 );
}
