import { createContext, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [allUsers, setUsers] = useState([]);

    const login=async(input) => {
        const res=await axios.post("/auth/login", input);
        setCurrentUser(res.data);
        return res.data;
    }

    const getUser=async(username) => {
        const res=await axios.get(`/users/${username}`);
        setCurrentUser(res.data[0]);
    }

    const getAllUsers=async() => {
        const res=await axios.get("/users");
        setUsers(res.data);
    }

    const register=async(input) => {
        const res=await axios.post("/auth/register", input);
        setCurrentUser(res.data);
    }

    const logout=async(input) => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, register, logout, getUser, allUsers, getAllUsers}}>
            {children}
        </AuthContext.Provider>
    )
};