import React from "react";
import { Nav } from "../components/Nav";
import { MyRegisterForm } from "../components/RegisterForm";
import { MyNavBar } from "../components/MyNavBar";
import { Container, Row,Col } from "react-bootstrap";

export const RegisterPage = () => {
    return (
        <div>
            <MyNavBar/>
            <Container className="mx-auto register-form">
                    <p class="fs-1 fw-bold text-center">Create Your Account</p>
                    <MyRegisterForm/>
            </Container>
        </div>
    )
}