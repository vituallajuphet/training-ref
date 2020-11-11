import React from 'react'
import InfoGridItem from './InfoGridItem'

const InfoGrid = (props) => {
  const { data } = props
  const { infoItemLists } = data

  return (
    <InfoGridItem infoItemLists={infoItemLists} />
  )
}

export default InfoGrid
