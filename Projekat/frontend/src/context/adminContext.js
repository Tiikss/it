import { createContext } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {

    const updateLesson=async(input) => {
        const res=await axios.post("/admins/updateLesson", input);
        return res.data;
    }

    return (
        <AdminContext.Provider value={{updateLesson}}>
            {children}
        </AdminContext.Provider>
    );
}
