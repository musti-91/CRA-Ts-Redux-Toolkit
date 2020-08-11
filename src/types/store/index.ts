import { IIntlState } from './intl.types';
import { ISystemState } from './system.types';
import { IAuthState } from "./auth.types";

export default interface IStore {
  auth: IAuthState,
  intl: IIntlState,
  system:ISystemState,
}
