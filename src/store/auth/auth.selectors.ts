import _get from "lodash/get";
import { IAuthState } from "types/store/auth.types";
import IStore from "types/store";

/**
 * Authentication selectors
 */

export const getAccessToken = (state: IStore): IAuthState["accessToken"] =>
  _get(state, ["auth", "accessToken"]);

export const getRefreshToken = (state: IStore): IAuthState["refreshToken"] =>
  _get(state, ["auth", "refreshToken"]);
