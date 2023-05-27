import React from 'react';
import { Helmet } from 'react-helmet';

function PageHelmet({ pageTitle }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="og:description" content="포트폴리오 구경하세요" />
        <meta property="og:title" content="유기태 포트폴리오" />
      </Helmet>
    </React.Fragment>
  );
}

export default PageHelmet;
