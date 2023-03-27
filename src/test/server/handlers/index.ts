import { authHandlers } from "./auth";
import { dashboardHanlder } from "./dashboard";
export const handlers = [...authHandlers, ...dashboardHanlder];
