import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import React from 'react';

import { ConfigProvider } from 'antd';
import { createGlobalStyle, ThemeProvider } from 'antd-style';

import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

import theme from '../theme';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        font-family: var(--font-inter);
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
    }

    body,
    #__next {
        display: flex;
        width: 100%;
        flex: 1;
        flex-direction: column;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <ConfigProvider theme={theme}>
      <Global />
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ConfigProvider>
  </ThemeProvider>
);

export default App;
