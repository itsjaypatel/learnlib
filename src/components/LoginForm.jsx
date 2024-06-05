import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

export const MyLoginForm = () => {

  const navigate = useNavigate();
  const [input,setInput]= useState({email:"",password:""});
    const auth = useAuth();
  const loginHandler = (e) => {
    e.preventDefault();
    
    auth.doLogin(input)
    .then(response => {
      if(response.token){
        auth.setLoggedIn(true);
        auth.setTokenInfo(response);
        localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("tokenInfo",JSON.stringify(response));
        console.log(response);
        console.log("user is logged in");
        navigate('/home');
      }
    }).catch(err => {
      auth.setLoggedIn(false);
    })
  }

  return  (
    <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required value={input.email} onChange={(e) => setInput({...input,email:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required onChange={(e) => setInput({...input,password: e.target.value})} />
      </Form.Group>
      <Button variant="primary w-100" type="submit">
        Login
      </Button>
    </Form>
  )
}