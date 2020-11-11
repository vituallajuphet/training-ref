import React from 'react'
import PageHeader from '../../common/PageHeader/PageHeader'
import DataTable from '../../common/components/DataTable'
import Headings from './TableHeader'
import Rows from './TableBody'


const Shop = (props) => {
  return (
    <>
      <PageHeader name='header' title='Shop' />
      <DataTable headings={Headings} rows={Rows} />
    </>
  )
}

export default Shop
