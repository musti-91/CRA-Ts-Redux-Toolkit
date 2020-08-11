import { AxiosError } from "axios";

export interface ISystemState {
  booting: boolean;
  ready: boolean;
  error?: AxiosError;
}
