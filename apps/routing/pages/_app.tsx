import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My app</title>
      </Head>

      <div className="container mx-auto">
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/route1">
                  <a>Route1</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
