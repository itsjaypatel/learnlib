import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../context/AuthContext';
import {MyToast} from './MyToast';

export const CreateSpaceForm = (e) => {
  
  const [input,setInput] = useState({title:"",description:""})
  const [toastData, setToastData] = useState({visible:false,title:"",body:""});
  const toggleShowToast = () => setToastData({...toastData,visible:false});

  const auth = useAuth();
  const createSpaceHandler = (e) => {
    e.preventDefault();

    auth
    .createSpace({title:input.title,description:input.description})
    .then((res) => {
      if(res.spaceId){
        setToastData({visible:true,title:"Space Created",body:input.code})
      }else{
        console.log("Create Space Not expected response", res);
      }
    }).catch((err) => {
      console.log("Error in createSpaceHandler" + err);
    })
  }

  return (
    <>
    <Form onSubmit={createSpaceHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" required value={input.title} onChange={(e) => setInput({...input,title:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} required placeholder='Enter Description' value={input.description} onChange={(e) => setInput({...input,description:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Button variant="primary" type="submit" className="w-100">
        Create
      </Button>
      </Form.Group>
    </Form>
    {
      toastData.visible && <MyToast showToast={toastData.visible} toggleShowToast={toggleShowToast} title={toastData.title} body={toastData.body} />
    }
    </>
    
  )
}
