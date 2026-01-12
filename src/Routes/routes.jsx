import App from '../Pages/App'


import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
]);

export default router;