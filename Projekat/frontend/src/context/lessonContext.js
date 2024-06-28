import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LessonContext = createContext();

export const LessonContextProvider = ({ children }) => {
    const [lessons, setLessons] = useState(null);

    const course=async(courseName) => {
        const res=await axios.get(`/courses/${courseName}`);
        setLessons(res.data);
    }

    return (
        <LessonContext.Provider value={{lessons, course}}>
            {children}
        </LessonContext.Provider>
    );
};
