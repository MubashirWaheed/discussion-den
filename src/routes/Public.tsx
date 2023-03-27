import { AuthRoutes } from "@/features/auth/routes";
export const Public = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
