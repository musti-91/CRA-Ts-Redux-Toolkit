import React, { FC, memo } from 'react';
import Layout from 'components/Layout';
import { Container } from './styled';

interface Props {}

/**
 * @author
 * @function Home
 **/

const Home: FC<Props> = (props) => {
  return (
    <Layout title="Home">
      <Container>Home Page Loaded</Container>
    </Layout>
  );
};

export default memo(Home);
