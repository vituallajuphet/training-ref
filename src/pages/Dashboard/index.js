import React from 'react'
import PageHeader from '../../common/PageHeader/PageHeader'
import { SkillsGrid, InfoGrid, Banner } from './components'
// import DataTable from '../../common/components/DataTable/index'
import MockData from './MockData'

const Dashboard = (props) => {
  return (
    <>
      {/* <PageHeader name='header' title='Dashboard' /> */}
      {/* <SkillsGrid data={MockData} /> */}
      {/* <InfoGrid data={MockData} /> */}
      <Banner  data={MockData}/>
    </>
  )
}

export default Dashboard
