import React from 'react';
import Helmet from 'react-helmet';

const Html = ({
  children, css = [], scripts = [], state = '{}', jss = ''
}) => {
  const head = Helmet.renderStatic();
  return (
    <html lang="">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {jss && <style id="jss-server-side">${jss}</style>}
        {css.filter(Boolean).map(href => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${state}`
          }}
        />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {scripts.filter(Boolean).map(src => (
          <script key={src} src={src} />
        ))}
      </body>
    </html>
  );
};

export default Html;
