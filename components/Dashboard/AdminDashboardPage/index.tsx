/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Container, Row, Col } from 'reactstrap'
import Title from 'components/Utils/Title'
import { styles } from './styles'

const AdminDashboardPage = () => {
  const theme = useTheme()

  return (
    <div css={styles(theme)}>
      <Title typed>./admin dashboard</Title>
      <Container className='py-5'>
        <Row>helo</Row>
      </Container>
    </div>
  )
}

export default AdminDashboardPage
