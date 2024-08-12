import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Andy Cruz Data Analyst" />
          <meta name="keywords" content="Andy Cruz, Data Analyst, Freelance, Portfolio" />
          <meta name="author" content="Andy Cruz" />
          {/* Nprogress css */}
          <link
            rel="icon"
            href="/educapro.ico" type="image/x-icon"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />
          <title>Andy Cruz | Data Analyst</title>
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
