import React from "react";
import { Nav } from "../components/Nav";
import { MyLoginForm } from "../components/LoginForm";
import { MyNavBar } from "../components/MyNavBar";
import { Button, Container, Offcanvas } from "react-bootstrap";

export const LoginPage = () => {
    return (
        <div>
            {/* <Nav selectedNavItem="Login" /> */}
            <MyNavBar/>
            <Container className="mx-auto register-form">
                <p class="fs-1 fw-bold text-center">Welcome Back!</p>
                <MyLoginForm/>
                {/* </Container> */}
            </Container>
        </div>
    )
}