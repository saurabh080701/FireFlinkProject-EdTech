import '../src/Style/main.scss'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SupportPage from "./pages/SupportPage";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from './pages/Layout';
import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoutes';

const App = () => {

  const router = createBrowserRouter([
    { path: '/', 
    element: <Layout />,
    children:  [
      {
        path: '/',
      element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
          path: "/courseDetails/:id",
          element:
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
      },
      {
        path: "/support",
        element:
        <PrivateRoute><SupportPage /> </PrivateRoute>  ,
      }
    ]},
  ])

  return (
    <div>
        <RouterProvider router={router}></RouterProvider>;
    </div>
  )
}

export default App;

