import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

interface Props {
  site: {
    title: string;
    description?: string | '';
    meta?: any;
  };

  lang?: string;
  children?: any;
}

/**
 * @author
 * @function Seo
 **/

const Seo: FC<Props> = ({ site, children, lang }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={site.title}
        titleTemplate={`%s | ${site.title}`}
        meta={[
          {
            name: `description`,
            content: '// TODO check this out',
          },
          {
            property: `og:title`,
            content: site.title,
          },
          {
            property: `og:description`,
            content: '// TODO check this out',
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: '// TODO: check this out',
          },
          {
            name: `twitter:title`,
            content: '// TODO check this out',
          },
          {
            name: `twitter:description`,
            content: '// TODO check this out',
          },
        ].concat(site.meta)}
      >
        {/* add custom seo injection (e.g: google analytics)*/}
        {children}
      </Helmet>
    </>
  );
};

Seo.propTypes = {
  // your expected props
};

Seo.defaultProps = {
  // your default props
};
export default Seo;
