import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
       <Head>
      <title>
        BarelyHuman Dev Studio
      </title>
      <link rel="shortcut-icon" href="/favicon.ico"/>
      <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
      rel="stylesheet"
    />
    </Head>
      <Component {...pageProps} />      
      <style jsx global>
          {
            `
            * {
        font-family: 'Quicksand', sans-serif;
      }`
          }
      </style>
    </>
  );
}

export default App;
