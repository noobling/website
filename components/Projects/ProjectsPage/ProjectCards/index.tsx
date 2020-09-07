/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Row, Col, Card, CardImg, CardTitle } from 'reactstrap'
import Link from 'next/link'
import projects from 'data/projects.json'
import { styles } from './styles'

const ProjectCards = () => {
  const theme = useTheme()

  return (
    <div css={styles(theme)}>
      {projects.map(project => (
        <Link href={project.purl} key={project.name}>
          <a className='text-decoration-none'>
            <Card outline color='secondary' className='bg-light'>
              <CardImg
                top
                width='100%'
                src={`projects/${project.img}`}
                alt={project.client}
                className='project-img img-fluid'
              />
              <div className='d-flex align-items-center'>
                <div className='bg-primary'>
                  <i className='material-icons-sharp text-secondary p-3'>
                    {project.icon}
                  </i>
                </div>
                <CardTitle className='font-weight-bold ml-3 mb-0 text-primary monospace'>
                  {project.name}
                </CardTitle>
              </div>
            </Card>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default ProjectCards
