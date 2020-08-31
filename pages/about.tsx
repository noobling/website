import React from 'react'
import Head from 'next/head'
import AboutPage from 'components/About/AboutPage'
import Seo from 'components/Utils/SEO'

const About = () => (
  <>
    <Head>
      <title>About | Coders for Causes</title>
      <Seo
        title='About Us'
        description='A group of students who develop technical solutions for charities and other not for profit organisations.'
        image='https://og-social-cards.dankestkush.vercel.app/**.%2Fabout**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%codersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg'
      />
      <link rel='preconnect' href='https://api.mapbox.com' crossOrigin='' />
      <link rel='dns-prefetch' href='//api.mapbox.com' />

      <link
        rel='preconnect'
        href='https://kit-free.fontawesome.com'
        crossOrigin=''
      />
      <link rel='dns-prefetch' href='//kit-free.fontawesome.com' />
      <script
        src='https://kit.fontawesome.com/249aebb7ef.js'
        crossOrigin='anonymous'
        defer
      />
    </Head>
    <AboutPage />
  </>
)

export default About
