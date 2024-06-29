import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { LessonContextProvider } from './context/lessonContext';
import { MainLessonContextProvider } from './context/mainLessonContext';
import { QuestionContextProvider } from './context/questionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LessonContextProvider>
        <MainLessonContextProvider>
          <QuestionContextProvider>
            <App />
          </QuestionContextProvider>
        </MainLessonContextProvider>
      </LessonContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
