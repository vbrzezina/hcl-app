import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import React from 'react';

import { ConfigProvider } from 'antd';
import { createGlobalStyle, ThemeProvider } from 'antd-style';

import { HydrationBoundary, keepPreviousData, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Header, Main } from '@/components/layout';

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

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
            placeholderData: keepPreviousData,
          },
        },
      }),
  );

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <DefaultSeo
              titleTemplate={`%s - UKHSA data dashboard`}
              defaultTitle="UKHSA data dashboard"
              description="The UKHSA data dashboard shows public health data across England. It builds on the success and is an iteration of the COVID-19 in the UK dashboard."
            />
            <Global />
            <Header />
            <Main>
              <Component {...pageProps} />
            </Main>
          </HydrationBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
