import Login from "./components/views/Login/Login";
import Dashboard from "./components/views/Dashboard/Dashboard";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "login",
    element: <Login />,
  },
];

export default routes;
