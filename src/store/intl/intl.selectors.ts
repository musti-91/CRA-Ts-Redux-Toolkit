import _get from "lodash/get";
import IStore from "types/store";

export const getIntl = (state: IStore) => _get(state, ["intl", "locale"]);
