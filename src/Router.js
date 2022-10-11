import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Topics from "./components/Topics/Topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Topics />,
      },
      {
        path: "stat",
        element: <Topics />,
      },
      {
        path: "blog",
        element: <Topics />,
      },
      {
        path: "topic/:topicID",
        element: <Topics />,
      },
    ],
  },
]);

export default router;
