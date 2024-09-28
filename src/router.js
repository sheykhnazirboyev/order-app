import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: Home,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Error - Not Found</h1>,
  },
]);

export default router;