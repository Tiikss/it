import { createContext, useState } from "react";
import axios from "axios";

export const CommentContext = createContext();

export const CommentContextProvider = ({ children }) => {
    const [comments, setComments] = useState(null);

    const [lessonName, setLessonName] = useState(null);
    const [courseName, setCourseName] = useState(null);

    const comment=async(lessonName, courseName, arr) => {
        setLessonName(lessonName);
        setCourseName(courseName);
        const res=await axios.post(`/comments/${courseName}/lesson/${lessonName}`, [lessonName, ...arr]);
    }

    return (
        <CommentContext.Provider value={{lessonName, comments, comment}}>
            {children}
        </CommentContext.Provider>
    );
}