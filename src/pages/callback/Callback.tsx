import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
// import config from 'config';

import { fetchAccessToken } from 'store/auth/auth.actions';
interface Props {
  fetchAccessToken: (code: string) => any;
}

/**
 * @author
 * @function Callback
 **/

const Callback: React.FC<Props> = ({ fetchAccessToken }) => {
  React.useEffect(() => {
    let search;
    if (typeof window !== undefined) {
      search = qs.parse(window.location.search);
    }
    if (search && search.code && typeof search.code === 'string') {
      fetchAccessToken(search.code);
    } else {
      //window.location.assign(config.API_BASE);
    }
  }, [fetchAccessToken]);
  return null;
};

const mapDispatchToProps = {
  fetchAccessToken,
};
export default connect(undefined, mapDispatchToProps)(Callback);
