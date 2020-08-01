/** @jsx jsx */
import App, { AppProps } from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { CacheProvider, Global, jsx } from '@emotion/core'
import { cache } from 'emotion'
import { useEffect, useContext } from 'react'
import { Auth } from '@aws-amplify/auth'
import User from 'components/Auth/User'
import Header from 'components/Utils/Header'
import Footer from 'components/Utils/Footer'
import { initAnalytics } from 'helpers/analytics'
import { initMessenger } from 'helpers/messenger'
import { UserContext } from 'helpers/user'
import { theme } from 'lib/theme'
import { globalStyle } from 'GlobalStyles'
import 'theme.scss'
import { Alert, Container } from 'reactstrap'

Auth.configure({
  aws_project_region: process.env.AMPLIFY_AWS_COGNITO_REGION,
  aws_cognito_region: process.env.AMPLIFY_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.AMPLIFY_AWS_COGNITO_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.AMPLIFY_AWS_COGNITO_WEB_CLIENT_ID,
  federationTarget: 'COGNITO_USER_POOLS',
  authenticationFlowType: 'USER_PASSWORD_AUTH'
})

const AddOns = () => {
  const { user } = useContext(UserContext)

  return process.env.NODE_ENV === 'production' ? (
    <>
      <div id='fb-root' />
      <div
        className='fb-customerchat'
        data-theme_color='#000000'
        data-page_id='700598980115471'
        data-logged_in_greeting={`Hi ${
          user?.given_name ?? 'there'
        }! How can we help you?`}
        data-logged_out_greeting='Please log into facebook to chat with us'
      />
    </>
  ) : null
}

const Website = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      initAnalytics('2423121134')
      initMessenger()
    }
  }, [])

  return (
    <User>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          <Global styles={globalStyle(theme)} />
          <Header />
          <main className='main'>
            {/* TODO remove once MVP is finished */}
            <Alert
              color='warning'
              className='fixed-top rounded-0 px-0 py-md-3'
              style={{ marginTop: '64px', zIndex: 3 }}
            >
              <Container>
                This website is still under development. Not everything may
                work, but feel free to look around. Here's a link to the{' '}
                <a
                  href='https://codersforcauses.org/landing'
                  target='_blank'
                  rel='noreferrer noopener'
                  className='alert-link'
                >
                  old website
                </a>
                .
              </Container>
            </Alert>
            <Component {...pageProps} />
          </main>
          <Footer />
          <AddOns />
        </CacheProvider>
      </ThemeProvider>
    </User>
  )
}

Website.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)

  return appProps
}

export default Website
