import React, { useState } from "react";
import { Button, Image, ListGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useAuth } from "../context/AuthContext";

export const Space = ({ space, index }) => {
  const auth = useAuth()
  const copyImage = <i class="fa-solid fa-copy"></i>;
  const [copyButtonValue,setCopyButtonValue] = useState(copyImage);
    
  const copyCodeHander = async (e) => {
    try{
      await navigator.clipboard.writeText(space.spaceId);
      setCopyButtonValue('Copied');
      setTimeout(() => setCopyButtonValue(copyImage),2000);
    }catch(error){
      console.log('Error while copying card id: ',space.spaceId);
    }
  }

  return (
    <Card key={index} bg="dark" text="light" className="p-0" style={{ width: '20rem' }}>
      <Card.Header className="fs-4">{space.title}</Card.Header>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text className="truncate-content-line-2" >
          {space.description}
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat est itaque provident incidunt nostrum error sed, cumque placeat harum quo sit quam consequatur non dolor eos officiis perspiciatis inventore! Pariatur possimus ex dolores alias vel nam, repellendus itaque aperiam iure nulla amet vitae, eos perspiciatis illum. Voluptates vero modi cumque. */}
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button variant="light" className="me-2" size="sm" onClick={() => auth.navigate(`space-detail/${space.spaceId}`)}><i class="fa-solid fa-eye"></i></Button>
          <Button variant="light" className="me-2" size="sm" onClick={copyCodeHander} >{copyButtonValue}</Button>
        </div>
      </Card.Body>
      <Card.Footer><i class="fa-solid fa-user-tie"></i>  {space.createdBy.name}</Card.Footer>
    </Card>
  );
}