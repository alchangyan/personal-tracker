import { post } from "./request";

interface LoginViaGoogleResponse {
  token: string;
  userId: string;
}

export const loginViaGoogle = (token: string) => post<LoginViaGoogleResponse>("/auth/google", { token });
