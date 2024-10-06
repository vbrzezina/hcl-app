import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext, DocumentProps } from 'next/document';
import React from 'react';

import { extractStaticStyle, StyleProvider } from 'antd-style';

import { inter } from './_app';

const MyDocument = (props: DocumentProps) => (
  <Html lang="en" className={inter.variable}>
    <Head>{props.styles}</Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Insert StyleProvider for rendering
  const page = await ctx.renderPage({
    enhanceApp: (App) => (props) => (
      <StyleProvider cache={extractStaticStyle.cache}>
        <App {...props} />
      </StyleProvider>
    ),
  });

  // Get static styles of the page one by one
  const styles = extractStaticStyle(page.html).map((item) => item.style);

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {styles}
      </>
    ),
  };
};

export default MyDocument;
