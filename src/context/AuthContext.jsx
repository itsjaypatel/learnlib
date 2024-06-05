import React, { createContext, useContext, useState } from "react";
import { baseUrl, post } from "../apis/apis";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = (props) => {
    const navigate = useNavigate();
    const localStorageTokenInfo = localStorage.getItem('tokenInfo') || JSON.stringify({ "email": "", "token": "", "role": [] })
    const [tokenInfo, setTokenInfo] = useState(JSON.parse(localStorageTokenInfo))
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
    const doRegister = async ({ name, email, password, role }) => {
        const url = `${baseUrl}/auth/register`;
        
        try {
            console.log("Registration begins....");
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name, email: email, password: password, role: role })
            });
            return await response.json()
        } catch (err) {
            console.log(`Error from ${url}`);
        }
    }
    const doLogin = async ({ email, password }) => {
        const url = `${baseUrl}/auth/login`;
        try {
            console.log("Login begins....");
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password })
            });
            return await response.json();
        } catch (err) {
            console.log(`Error from ${url}`);
        }
    }
    const doLogout = () => {
        localStorage.removeItem("tokenInfo");
        localStorage.removeItem("isLoggedIn");
        setTokenInfo({ "email": "", "token": "", "role": [] });
        setLoggedIn(false);
        navigate("home");
    }

    const fetchSpaceByCreator = async () => {
        const url = `${baseUrl}/secure/spaces/get/users/creator/${tokenInfo.userId}`;
        try {
            console.log("fetch Spaces for teacher begins....");
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${tokenInfo.token}`
                }
            });
            return await response.json();
        } catch (err) {
            console.log(`Error from ${url}`);
        }
    }

    const fetchSpaceForStudent = async () => {
        
        const url = `${baseUrl}/secure/spaces/get/users/member/${tokenInfo.userId}`;
        try {
            console.log("fetch Spaces for student begins....");
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${tokenInfo.token}`
                }
            });
            return await response.json();
        } catch (err) {
            console.log(`Error from ${url}`);
        }
    }

    const fetchSpaceById = async (spaceId) => {
        const url = `${baseUrl}/secure/spaces/get/${spaceId}`;
        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenInfo.token}`
                }
            });
            return await response.json();
        } catch (err) {
            console.log(`Error from ${url}`);
        }
    }

    const createSpace = async ({title,description}) => {
        const url = `${baseUrl}/secure/spaces/create/users/${tokenInfo.userId}`;
        try {
            console.log("create space begins...." + title + " , " + description);
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenInfo.token}`
                },
                body: JSON.stringify({title:title,description:description})
            });
            return await response.json();
        } catch (err) {
            console.log(`Error from ${url}`);
        }
    }

    const joinSpace = async (body) => {
        console.log("body received from join form",body)
        const url = `${baseUrl}/secure/spaces/join`;
        try {
            let response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${tokenInfo.token}`
                },
                mode:"cors",
                body: JSON.stringify({'spaceId':Number(body.spaceId),'userId':Number(tokenInfo.userId)})
            });
            console.log("response received from service" , response);
            return await response.json();
        } catch (err) {
            console.log(`Error from ${url}`);
        }
    }


    

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, doRegister, doLogin, tokenInfo, setTokenInfo, fetchSpaceByCreator, doLogout, navigate, fetchSpaceForStudent, createSpace,joinSpace, fetchSpaceById }}>
            {props.children}
        </AuthContext.Provider>
    );
}