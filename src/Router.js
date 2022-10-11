import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Topics, { loader as topicsLoader } from "./components/Topics/Topics";
import Test from "./components/Test/Test";
import Stat from "./components/Stat/Stat";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: topicsLoader,
        element: <Topics />,
      },
      {
        path: "stat",
        loader: topicsLoader,
        element: <Stat />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "test/:topicID",
        element: <Test />,
      },
    ],
  },
]);

export default router;
