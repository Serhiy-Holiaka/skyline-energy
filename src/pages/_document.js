import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="color-scheme" content="light" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
