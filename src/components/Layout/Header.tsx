import React, { FC } from 'react';

import { Logo } from './styled';
import logo from 'assets/logo.png';

interface Props {}

/**
 * @author
 * @function Header
 **/

const Header: FC<Props> = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Logo src={logo} alt="logo" />
          </li>
          <li>nav1</li>
          <li>nav2</li>
          <li>nav3</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
