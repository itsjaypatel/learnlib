import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ProfileForm = () => {
  const auth = useAuth();
  const [profile,setProfile] = useState({"name":auth.tokenInfo.name,"email":auth.tokenInfo.email,"role":auth.tokenInfo.role[0].substring(5)});
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" value={profile.name} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="johndoe@email.com" value={profile.email} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="John Doe" value={profile.role} disabled />
      </Form.Group>
    </Form>
  );
}