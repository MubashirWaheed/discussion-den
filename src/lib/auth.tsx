import { configureAuth } from "react-query-auth";
import { loginWithEmailPassoword } from "@/features/auth/api/login";
import { LoginProps } from "@/features/auth/api/login";
import axios, { AxiosResponse } from "axios";

interface UserResponse {
  name: string;
  email: string;
  role: "ADMIN" | "USER";
}

interface Credentials {
  email: string;
  password: string;
}

export const { useUser, useLogin, useRegister, useLogout } = configureAuth<
  UserResponse,
  any, // error type
  Credentials,
  Credentials
>({
  userFn: async () => {
    const response = await axios.get<UserResponse>("/");
    return response.data;
  },
  loginFn: async (credentials: Credentials): Promise<UserResponse> => {
    const response = await loginWithEmailPassoword(credentials);
    return response.data;
  },
  registerFn: async (credentials: Credentials) => {
    const response = await axios.post<UserResponse>("/register", credentials);
    return response.data;
  },
  logoutFn: () => axios.post("/logout") as Promise<AxiosResponse<any>>,
});
