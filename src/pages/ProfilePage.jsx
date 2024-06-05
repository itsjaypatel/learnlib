import React from "react";
import { Nav } from "../components/Nav";
import { MyRegisterForm } from "../components/RegisterForm";
import { MyNavBar } from "../components/MyNavBar";
import { Container, Row,Col } from "react-bootstrap";
import { ProfileForm } from "../components/ProfileForm";
import { useAuth } from "../context/AuthContext";

export const ProfilePage = () => {
    return (
        <div>
            <MyNavBar/>
            <Container className="mx-auto profile-form">
                    <p class="fs-2 fw-bold text-center">My Profile</p>
                    <ProfileForm/>
            </Container>
        </div>
    )
}