import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      )
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com/'
            crossOrigin=''
          />
          <link
            rel='preconnect'
            href='https://fonts.googleapis.com/'
            crossOrigin=''
          />
          <link
            rel='preconnect'
            href='https://connect.facebook.net'
            crossOrigin=''
          />
          <link rel='preconnect' href='https://unsplash.it' crossOrigin='' />

          <link rel='dns-prefetch' href='//fonts.gstatic.com/' />
          <link rel='dns-prefetch' href='//fonts.googleapis.com/' />
          <link rel='dns-prefetch' href='//connect.facebook.net' />
          <link rel='dns-prefetch' href='//unsplash.it' />

          {/* Typefaces from Google Fonts */}
          <link
            href='https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans|Material+Icons+Sharp&display=swap'
            rel='stylesheet'
          />

          <meta name='author' content='Coders for Causes' />
          <link rel='icon' href='/favicon-light.png' type='image/png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
