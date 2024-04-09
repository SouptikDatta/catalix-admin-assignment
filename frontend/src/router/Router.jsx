import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";

import Main from '../layout/Main'
import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import Transformation from "../pages/Transformation";
import Library from "../pages/Library";
import Settings from "../pages/Settings";
import Activities from "../pages/Activities";
import Notifications from "../pages/Notifications";
import Messages from "../pages/Messages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/activities",
          element: <Activities />,
        },
        
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "/transformation",
          element: <Transformation />,
        },
        {
          path: "/library",
          element: <Library />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
      ],
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/login",
        element: <Login/>
    },
  ]);
  
  export default router;