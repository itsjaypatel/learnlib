import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../context/AuthContext';
import { MyToast } from './MyToast';

export const JoinSpaceForm = () => {

  const auth = useAuth();
  const [input,setInput] = useState({code:""});
  const [toastData, setToastData] = useState({visible:false,title:"",body:""});
  const toggleShowToast = () => setToastData({...toastData,visible:false});

  const joinSpaceHandler = (e) => {
    e.preventDefault();
    auth
    .joinSpace({"spaceId":input.code})
    .then((res) => {
      setToastData({visible:true,title:"Space Joined",body:input.code})
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
    <Form onSubmit={joinSpaceHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          Get space code from your teacher
        </Form.Text>
        <Form.Control type="number" placeholder="Enter Space Code"  required value={input.code} onChange={(e) => setInput({...input,code:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Button variant="primary" type="submit" className="w-100">
        Join
      </Button>
      </Form.Group>
    </Form>
    {
      toastData.visible && <MyToast showToast={toastData.visible} toggleShowToast={toggleShowToast} title={toastData.title} body={toastData.body} />
    }
    </>
  )
}
