import React, { FC, memo } from 'react';

interface Props {}

/**
 * @author
 * @function Callback
 **/

const Callback: FC<Props> = (props) => {
  return <div>Callback</div>;
};

export default memo(Callback);
