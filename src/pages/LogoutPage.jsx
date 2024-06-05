import React from "react";
import { Nav } from "../components/Nav";
import { SpaceLayout } from "../components/SpaceView";
import { MyNavBar } from "../components/MyNavBar";
import { useAuth } from "../context/AuthContext";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const LogoutPage = () => {
    const auth = useAuth();
    return (
        <div className="w-100">
            <MyNavBar />
            <Container className="text-center">
                <p className="fs-2 fw-bold text-center mt-4 py-5">Oh no! You're leaving... Are you sure?</p>
                <div className="d-grid gap-2">
                    <Button variant="danger" size="lg" onClick={() => auth.doLogout()}>
                        Yes, Logged me out
                    </Button>
                    <Button variant="primary" size="lg" onClick={() => {
                        auth.navigate('/home');
                    }}>
                        No
                    </Button>
                </div>
            </Container>
        </div>
    )
}