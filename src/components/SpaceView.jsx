import React, { useEffect, useState } from "react";
import { AlertHeading, Container, ListGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useAuth } from "../context/AuthContext";
import { Space } from "./Space";

export const SpaceView = () => {
    const auth = useAuth()
    const [spaces, setSpaces] = useState([]);
    const roles = auth.tokenInfo.role;

    // const copySpaceIdHandler = 

    useEffect(() => {
        if (roles.includes("ROLE_STUDENT")) {
            auth
                .fetchSpaceForStudent()
                .then((response) => {
                    console.log(response);
                    setSpaces(response)
                    // setSpaces(response);
                }).catch((err) => {
                    console.log(err);
                })
        } else if (roles.includes("ROLE_TEACHER")) {
            auth
                .fetchSpaceByCreator()
                .then((response) => {
                    console.log(response);
                    // setSpaces(res)
                    setSpaces(response);
                }).catch((err) => {
                    console.log(err);
                })
        }
    }, []);

    if (!spaces) {
        return <Container className="space-container">
            <p className="fs-2 fw-bold text-center mt-4">Loading...</p>
        </Container>
    }
    if (spaces.length === 0) {
        return <Container className="space-container">
            <p className="fs-2 fw-bold text-center mt-4">No Space Found</p>
        </Container>
    }

    return (
        <Container className="space-container">
            {
                <Container className="row gap-3 mx-auto pb-4">
                    {
                        spaces.map((space, index) =>
                            <Space space={space} key={index}/>
                        )
                    }
                </Container>
            }

        </Container>

    );
}