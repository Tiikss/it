import { createContext, useState } from "react";
import axios from "axios";

export const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
    const [question, setQuestion] = useState(null);

    const [courseName, setCourseName] = useState(null);
    const [lessonName, setLessonName] = useState(null);

    const questions=async(courseName, lessonName) => {
        setCourseName(courseName);
        setLessonName(lessonName);
        const res=await axios.get(`/questions/${courseName}/lesson/${lessonName}`);
        setQuestion(res.data);
    }

    const addLesson=async(lessonName, username) => {
        await axios.post(`/questions/${lessonName}/${username}`, {lessonName: lessonName, username: username});
    }

    return (
        <QuestionContext.Provider value={{courseName, lessonName, question, questions, addLesson}}>
            {children}
        </QuestionContext.Provider>
    );
};