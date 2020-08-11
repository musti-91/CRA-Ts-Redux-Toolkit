import { AxiosError } from "axios";

export interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
}
