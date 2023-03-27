import { Dashboard } from "@/features/misc";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const Protected = [
  {
    path: "/app/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
