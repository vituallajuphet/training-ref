import React from 'react'
import SkillsGridItem from './SkillsGridItem'

const SkillsGrid = (props) => {
  const { data } = props
  const { skillItemLists } = data

  return (
    <SkillsGridItem skillItemLists={skillItemLists} />
  )
}

export default SkillsGrid
