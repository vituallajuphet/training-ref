/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Card, Cell, Grid } from '../../../components'

const InfoGridItem = (props) => {
  const { infoItemLists } = props

  return (
    <section className='info-grid'>
      <Grid grid='grid'>

        {
          infoItemLists.map(infoItemList => (
            <Cell cell='cell' key={infoItemList.id} size={infoItemList.size}>
              <Card card='card' {...infoItemList}>

                <div className='card__img' />
                <div className='card__title' name={infoItemList.title}>
                  <h2>{infoItemList.title}</h2>
                </div>
                
                <div className='card__content'>
                  <section>
                    <p>
                      <strong>
                        {infoItemList.heading} <br />
                        {infoItemList.subheading}
                        <a href='https://www.sketchup.com/' target='_blank'> {infoItemList.link} </a>
                      </strong>
                    </p>
                    <p>{infoItemList.description}</p>
                  </section>
                </div>

                <div className='card__footer'>
                  <a
                    href={infoItemList.btnlink}
                    target='_parent' // this is a standard targeting link
                    rel='noopener'   // with this rel=noopener
                    className='sg-btn sg-btn--hover'
                  >
                    {infoItemList.btnlabel}
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

export default InfoGridItem
