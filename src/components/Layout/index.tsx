import React from 'react';
import Header from './Header';
import Seo from './Seo';
import Footer from './Footer';

interface Props {
  children?: any;
  title: string;
  meta?: any[];
}

/**
 * @author
 * @function Layout
 **/

const Layout: React.FC<Props> = ({ children, title, meta }) => {
  return (
    <div>
      <Seo site={{ title, meta }} />
      <Header />
      <main>{children}</main>
      <Footer websiteTitle="Coderreview.io" />
    </div>
  );
};

export default Layout;
