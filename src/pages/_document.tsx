import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext, DocumentProps } from 'next/document';
import React from 'react';

import { extractStaticStyle, StyleProvider } from 'antd-style';

import { inter } from './_app';

const MyDocument = (props: DocumentProps) => (
  <Html lang="en" className={inter.variable}>
    <Head>
      <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="UKHSA" />
      <link rel="manifest" href="/site.webmanifest" />
      {props.styles}
    </Head>
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
