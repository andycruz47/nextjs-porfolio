import Document, { Html, Head, Main, NextScript } from "next/document";

/* <title>Andy Cruz Portfolio</title>
*/
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Andy Cruz Portfolio" />
          
          {/* Nprogress css */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
