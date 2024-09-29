import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import { Demo } from "./components/Demo";


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
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Demo />,
  },
]);

export default router;