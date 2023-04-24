import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
