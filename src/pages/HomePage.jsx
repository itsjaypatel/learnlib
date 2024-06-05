import React, { useState } from "react";
import { Nav } from "../components/Nav";
import { SpaceLayout, SpaceView } from "../components/SpaceView";
import { MyNavBar } from "../components/MyNavBar";
import { useAuth } from "../context/AuthContext";
import { Container, Tab, Tabs } from "react-bootstrap";
import { CreateSpaceForm } from "../components/CreateSpaceForm";
import { JoinSpaceForm } from "../components/JoinSpaceForm";

export const HomePage = () => {
    const auth = useAuth();
    const [key, setKey] = useState('View');
    return (
        <div className="w-100">
            <MyNavBar />
            {!auth.isLoggedIn && <h2 className="h-10"> Please Log In</h2>}
            {auth.isLoggedIn && <Container>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="w-100 mx-auto my-5"
                    justify
                    variant='underline'
                    unmountOnExit
                >
                    {
                      auth.tokenInfo.role.includes("ROLE_TEACHER") &&  <Tab eventKey='Create' title='Create'>
                        <CreateSpaceForm />
                    </Tab>
                    }
                    {
                      auth.tokenInfo.role.includes("ROLE_STUDENT") &&  <Tab eventKey='Join' title='Join'>
                        <JoinSpaceForm/>
                    </Tab>
                    }
                    <Tab eventKey="View" title="My Spaces">
                        <SpaceView/>
                    </Tab>
                </Tabs>
            </Container>}


        </div>
    )
}