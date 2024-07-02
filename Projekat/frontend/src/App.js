import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Course from "./pages/Course";
import Lesson from "./pages/Lesson";
import Admin from "./pages/Admin";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/course/:id",
        element: <Course />,
      },
      {
        path: "/admin",
        element: <Admin />,
      }
    ]
  },
  {
    path: "/course/:courseId/lesson/:lessonId",
    element: <Lesson />,
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
