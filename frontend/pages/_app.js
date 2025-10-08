import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Atelier des Chefs Boulanger-Pâtissier</title>
        <meta
          name="description"
          content="Assistant de recettes professionnelles de boulangerie, pâtisserie et pizza avec protocoles détaillés."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
