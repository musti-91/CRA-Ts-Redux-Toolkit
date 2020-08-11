import React from 'react';

interface Props {
  websiteTitle: string;
}

/**
 * @author
 * @function Footer
 **/

const Footer: React.FC<Props> = ({ websiteTitle }) => {
  return (
    <footer>
      © {new Date().getFullYear()}{' '}
      <a href="" target="_blank" rel="noopener">
        {websiteTitle}
      </a>
    </footer>
  );
};

export default Footer;
