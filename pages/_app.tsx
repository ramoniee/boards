import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Default SEO */}
        <title>Raymond Mawina</title>
        <meta name="description" content="Raymond Mawina." />

        {/* Open Graph */}
        <meta property="og:title" content="Raymond Mawina" />
        <meta
          property="og:description"
          content="Raymond Mawina."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ray-mawina.co.za" />
        <meta property="og:image" content="/headshot_small" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}



