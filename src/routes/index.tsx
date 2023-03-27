import React from "react";
import { useRoutes } from "react-router-dom";

import { Landing } from "@/features/misc";
import { useUser } from "@/lib/auth";
import { Public } from "./Public";
import { Protected } from "./Protected";

export const AppRoutes = () => {
  const user = useUser();
  console.log("user: ", user);
  const commonRoutes = [{ path: "/", element: <Landing /> }];
  const routes = user.data ? Protected : Public;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
