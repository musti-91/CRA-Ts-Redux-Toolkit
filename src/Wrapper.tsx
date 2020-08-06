import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { IStoreType, fetchAccessToken, IAuthState } from "./store";

interface Props {
  auth: IAuthState;
  fetchTokens: (code: string) => any;
}

/**
 * @author
 * @function Wrapper
 **/

const Wrapper: FC<Props> = ({ fetchTokens, auth }) => {
  useEffect(() => {
    fetchTokens("something");
  }, []);

  return (
    <>
      <div>{auth.loading && `Loading....`}</div>
      <div>{auth.accessToken}</div>
    </>
  );
};

const mapState = (state: IStoreType) => ({
  auth: state.auth,
});
const mapDispatch = (dispatch: any) => ({
  fetchTokens: (code: string) => dispatch(fetchAccessToken(code)),
});
export default connect(mapState, mapDispatch)(Wrapper);
