import { createContext, useState } from "react";
import axios from "axios";

export const LessonContext = createContext();

export const LessonContextProvider = ({ children }) => {
    const [lessons, setLessons] = useState(null);

    const [courseName, setCourseName] = useState(null);

    const course=async(courseName) => {
        setCourseName(courseName);
        const res=await axios.get(`/courses/${courseName}`);
        setLessons(res.data);
    }

    return (
        <LessonContext.Provider value={{courseName, lessons, course}}>
            {children}
        </LessonContext.Provider>
    );
};
