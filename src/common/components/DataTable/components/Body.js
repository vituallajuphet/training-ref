import React from 'react'

const Body = (props) => {
  const { rows } = props

  const renderRow = ( _row, rowIndex ) => {
    const { rows } = props

    return (
      <tr key={`row-${rowIndex}`}>
        {
          rows[rowIndex].map((_cell, cellIndex) => {
            return (
              <td key={`${rowIndex}-${cellIndex}`}>
                {rows[rowIndex][cellIndex]}
              </td>
            )
          })
        }
      </tr>
    )
  }

  const tBody = rows.map(renderRow)

  return (
  <tbody>{tBody}</tbody>
  )
}

export default Body
