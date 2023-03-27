import axios, { AxiosResponse } from "axios";

export type LoginProps = {
  email: string;
  password: string;
};
type UserResponse = {
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "ADMIN" | "USER";
};

export const loginWithEmailPassoword = (data: LoginProps): Promise<AxiosResponse<UserResponse>> => {
  return axios.post<UserResponse>("/login", data);
};
