import React from 'react';

export interface Props {
  label: string;
  onPressed: () => void;
}

/**
 * @author
 * @function Button
 **/

const Button: React.FC<Props> = ({ label, onPressed }) => {
  return (
    <div>
      <button onClick={() => onPressed()}>{label}</button>
    </div>
  );
};

export default Button;
