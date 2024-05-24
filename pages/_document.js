import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="ja">
    <Head>
      <link rel="icon" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
