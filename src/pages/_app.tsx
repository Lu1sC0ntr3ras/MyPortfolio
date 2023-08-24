import { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import '../styles/global.scss';
import Layout from '@/shared/components/base/layout/layout.component';
import ThemeState from '@/core/context/theme/ThemeState';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App ({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const routesPublic = ['404', '/recover-password', '/recover-password/[token]'];

  const getLayout = Component.getLayout ?? ((page) => {
    return (
      <>
        {
          routesPublic.includes(router.pathname)
            ? page
            : <Layout>
              {page}
            </Layout>
        }
      </>

    );
  });

  return (
    <>
      <ThemeState>
        {getLayout(<Component {...pageProps} />)}
      </ThemeState>
    </>
  );
}
