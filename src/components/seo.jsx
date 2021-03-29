import * as React from "react";
import SEO from "../seo.json";
import { Helmet } from 'react-helmet-async';

const Seo = () => {
  // If url is set to 'glitch-default', we use the hostname for the current page
  // Otherwise we use the value set in seo.json
  const url = SEO.url === 'glitch-default' ? window.location.hostname : SEO.url
  
  return <Helmet>
    <title>{SEO.title}</title>

    <meta
      name="description"
      content={SEO.description}
    />
    <meta name="robots" content="index,follow" />

    <link rel="canonical" href={url} />

    <meta property="og:title" content={SEO.title} />
    <meta property="og:type" content="article" />

    <meta property="og:url" content={url} />
    <meta
      property="og:description"
      content={SEO.description}
    />
    <meta
      property="og:image"
      content={SEO.image}
    />

    <meta name="twitter:card" content="summary" />

    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={SEO.title} />
    <meta
      name="twitter:description"
      content={SEO.description}
    />
    <meta
      name="twitter:image"
      content={SEO.image}
    />
  </Helmet>
};

export default Seo;
