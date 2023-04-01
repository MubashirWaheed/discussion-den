import { AuthRoutes } from "@/features/auth/routes";
import { Login } from "@/features/auth/routes/Login";
import { Outlet } from "react-router-dom";
const Test = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const Public = [
  {
    path: "/auth/",
    element: <Test />,
    children: [{ path: "login", element: <Login /> }],
  },
];
