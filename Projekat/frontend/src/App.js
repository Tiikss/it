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
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
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
        element: <div>Profile</div>,
      },
      {
        path: "/lessons",
        element: <div>Lessons</div>,
      },
      {
        path: "/lesson/:id",
        element: <div>Lesson</div>,
      },
      {
        path: "/courses",
        element: <div>Courses</div>,
      },
      {
        path: "/course/:id",
        element: <div>Course</div>,
      }
    ]
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
