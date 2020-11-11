import React from 'react'
import { Card, Cell, Grid } from '../../../components'

const SkillsGridItem = (props) => {
  const { skillItemLists } = props

  return (
    <section className='skills-grid'>
      <Grid grid='grid'>

        {
          skillItemLists.map(skillItemList => (
            <Cell cell='cell' key={skillItemList.id} size={skillItemList.size}>
              <Card card='card' {...skillItemList}>

                <div className='card__img' />
                <div className='card__title' name={skillItemList.title}>
                  <h2>{skillItemList.title}</h2>
                </div>

                <div className='card__content'>
                  <section>
                    <p>Learn with <strong>{skillItemList.heading}</strong></p>
                    <p>{skillItemList.description}</p>
                  </section>
                </div>

                <div className='card__footer'>
                  <a
                    href={skillItemList.btnlink}
                    target='_parent' // this is a standard targeting link
                    rel='noopener'   // with this rel=noopener
                    className='sg-btn sg-btn--hover'
                  >
                    {skillItemList.btnlabel}
                  </a>
                </div>
                
              </Card>
            </Cell>
          ))
        }

      </Grid>
    </section>
  )
}

export default SkillsGridItem
