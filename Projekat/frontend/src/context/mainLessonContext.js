import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const MainLessonContext = createContext();

export const MainLessonContextProvider = ({ children }) => {
    const [less, setLesson] = useState(null);

    const allLessons=async() => {
        const res=await axios.get("/lessons/getAll");
        setLesson(res.data);
    }

    const lesson=async(courseName, lessonName) => {
        const res=await axios.get(`/lessons/${courseName}/lesson/${lessonName}`);
        setLesson(res.data);
    }

    return (
        <MainLessonContext.Provider value={{less, lesson, allLessons}}>
            {children}
        </MainLessonContext.Provider>
    );
};

