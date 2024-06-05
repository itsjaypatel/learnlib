import React, { useEffect, useState } from "react";
import { MyNavBar } from "../components/MyNavBar";
import { Container, Row, Col, Stack, Tabs, Tab, Button } from "react-bootstrap";
import StudentList from "../components/StudentList";
import { useAuth } from "../context/AuthContext";
import { Navigate, useParams } from "react-router-dom";

export const SpaceDetailPage = () => {
    const [key, setKey] = useState('students');
    const params = useParams();
    const auth = useAuth();
    const spaceId = params["spaceId"];
    console.log("params", params);
    // const [students,setStudents] = useState([]);
    const [mySpace, setMySpace] = useState();

    useEffect(() => {
        auth.fetchSpaceById(spaceId)
            .then((space) => {
                console.log("Fetching space detail", space);
                setMySpace(space);
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    if (!mySpace) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <MyNavBar />
            <Container className="mx-auto my-3">
                <Container className="d-flex align-items-end bg-dark text-light w-100 p-5 border rounded" >
                    <Container>
                        <Button variant="light btn-outline my-2" onClick={() => auth.navigate('home')} size="sm">
                            <i class="fa-solid fa-arrow-left"></i>
                            <span className="ps-2">Back</span>
                        </Button>
                        <p class="fs-1 fw-bold">{mySpace.title}</p>
                        <p class="fs-6 fw-lighter">{mySpace.description}</p>
                        <hr className="w-100" color="info" />
                        <div class="fs-6 fw-lighter m-2"><i class="fa-solid fa-user-tie"></i> {mySpace.createdBy.name}</div>
                        <div class="fs-6 fw-lighter m-2">Student: {mySpace.members.length}</div>
                    </Container>
                </Container>
                
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="my-3"
                    variant="underline"
                    color="pills"
                    transition={true}
                    justify
                    fill
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <Tab eventKey="assignment" title="Assignment">
                        Tab content for Home
                    </Tab>
                    <Tab eventKey="students" title="Students">

                        {mySpace && mySpace.members && mySpace.members.length > 0 && <StudentList students={mySpace.members} />}
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}