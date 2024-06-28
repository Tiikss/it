import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { LessonContextProvider } from './context/lessonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LessonContextProvider>
        <App />
      </LessonContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
