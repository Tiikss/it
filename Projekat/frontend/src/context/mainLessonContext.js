import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const MainLessonContext = createContext();

export const MainLessonContextProvider = ({ children }) => {
    const [less, setLesson] = useState(null);


    const lesson=async(courseName, lessonName) => {
        const res=await axios.get(`/lessons/${courseName}/lesson/${lessonName}`);
        setLesson(res.data);
    }

    return (
        <MainLessonContext.Provider value={{less, lesson}}>
            {children}
        </MainLessonContext.Provider>
    );
};

