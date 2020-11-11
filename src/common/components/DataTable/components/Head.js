import React from 'react'

const Head = (props) => {
  const { headings } = props

  const renderHeadingRow = ( _cell, tdIndex ) => {
    const { headings } = props

    return (
      <td key={`heading-${tdIndex}`}>
        {headings[tdIndex]}
      </td>
    )
  }

  const tHead = (
    <tr key='heading'>
      {
        headings.map(renderHeadingRow)
      }
    </tr>
  )

  return (
    <thead>{tHead}</thead>
  )
}

export default Head
