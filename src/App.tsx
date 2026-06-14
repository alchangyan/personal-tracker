import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "@/components/ProtectedRoute";

import Homepage from "@/pages/Homepage";
import Board from "@/pages/Board";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/board/:boardId",
        element: <Board />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
