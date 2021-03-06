import React from 'react'
import Head from 'next/head'
import ProjectPage from 'components/Projects/ProjectPage'

const Project = () => (
  <>
    <Head>
      <title>Project: Coders for Causes</title>
      <meta
        name='description'
        content='Coders for Causes is a not for profit organisation that empowers charities and other not for profit organisations by connecting them with university students to develop technical solutions. We are a student-run club based in Perth, Western Australia with a wide range of clients. Whether you are looking for technical advice or a long term project, get in touch with us for more information.'
      />
    </Head>
    <ProjectPage />
  </>
)

export default Project
