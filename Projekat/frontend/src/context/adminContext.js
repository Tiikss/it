import { createContext } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {

    const updateLesson=async(input) => {
        const res=await axios.post("/admins/updateLesson", input);
        return res.data;
    }

    const updateQuestion=async(input) => {
        const res=await axios.post("/admins/updateQuestion", input);
        return res.data;
    }

    const deleteLesson=async(input) => {
        const res=await axios.delete(`/admins/deleteLesson/${input}`);
    }

    const addLesson=async(input) => {
        const res=await axios.post("/admins/addLesson", input);
        return res.data;
    }

    const addQuestion=async(input) => {
        const res=await axios.post("/admins/addQuestion", input);
        return res.data;
    }

    return (
        <AdminContext.Provider value={{updateLesson, deleteLesson, addLesson, addQuestion, updateQuestion}}>
            {children}
        </AdminContext.Provider>
    );
}
