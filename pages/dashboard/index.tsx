import React, { useContext } from 'react'
import PageContainer from 'components/PageContainer'
import DashboardPage from 'components/Dashboard/DashboardPage'
import Membership from 'pages/membership'
import { UserContext } from 'helpers/user'

const Dashboard = () => {
  const { user } = useContext(UserContext)
  return user ? (
    <PageContainer>
      <DashboardPage />
    </PageContainer>
  ) : (
    <Membership noRedirect />
  )
}

export default Dashboard
