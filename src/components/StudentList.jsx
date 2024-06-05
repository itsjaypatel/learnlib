import React from 'react'
import { Badge, Container, Image, ListGroup, Stack } from 'react-bootstrap'

const StudentList = ({students}) => {

    // const students = [
    //     { "name": "Jay Patel", "email": "jaypatel@email.com" },
    //     { "name": "Jay Patel", "email": "jaypatel@email.com" },
    //     { "name": "Jay Patel", "email": "jaypatel@email.com" },
    //     { "name": "Jay Patel", "email": "jaypatel@email.com" },
    //     { "name": "Jay Patel", "email": "jaypatel@email.com" }
    // ]
    return (
       <Container className='student-list-container mx-auto py-4' fluid>
        <ListGroup as="ol" color='dark' >
            {
                students.map((s, index) => <ListGroup.Item
                    variant="light"
                    key={index}
                    as="li"
                    className="d-flex justify-content-between align-items-start border-dark"
                >
                    <div className="me-auto">
                        <div className="d-flex align-items-center gap-3">
                            <Image src='https://itsjaypatel.in/static/media/profile-picture.ed82c3f07f858ff2eea4.png' roundedCircle height={40} ></Image>
                            <div>
                                <p className="fs-5 fw-bolder my-0">{s.name}</p>
                                {s.email}
                            </div>
                        </div>
                    </div>
                </ListGroup.Item>)
            }
        </ListGroup>
        </Container>
    )
}

export default StudentList