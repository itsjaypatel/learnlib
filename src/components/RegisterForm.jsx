import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const MyRegisterForm = () => {

  const initialInputState = {name:"",email:"",password:"",role:""};
  const [input,setInput] = useState(initialInputState);
    const auth = useAuth();

    const registerHandler = (e) => {
        e.preventDefault();
  
        const registerInput = {
          name: input.name,
          email: input.email,
          password: input.password,
          role: input.role || "ROLE_STUDENT"
        };
        console.log(registerInput);
        auth.doRegister({
          name: input.name,
          email: input.email,
          password: input.password,
          role: input.role || "ROLE_STUDENT"
        }).then((res) => {
          if(res.success){
            console.log("user is registered");
          }
          setInput(initialInputState);
        }).catch((err)=> {
          console.log(err);
          setInput(initialInputState);
        });
      }
  return (
    <Form onSubmit={registerHandler}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" value={input.name} onChange={e => setInput({...input,name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="johndoe@email.com" required value={input.email} onChange={e => setInput({...input,email:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" equired value={input.password} onChange={e => setInput({...input,password:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Select onChange={(e) => setInput({...input,role:e.target.value})}>
          <option value="ROLE_STUDENT">STUDENT</option>
          <option value="ROLE_TEACHER" >TEACHER</option>
        </Form.Select>
      </Form.Group>
      <Button className="w-100" variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}