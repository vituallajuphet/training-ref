import React from 'react'

function Foot() {
  return (
    <tfoot>
      <div className='footer'>
        <label htmlFor='cars' className='footer__rppLabel'>Rows per page : </label>
        <select name='cars' className='footer__rppSelect' id='cars'>
          <option value='volvo'>5</option>
          <option value='saab'>10</option>
          <option value='mercedes'>15</option>
          <option value='toyota'>20</option>
          <option value='hyundai'>30</option>
          <option value='chevrolet'>40</option>
          <option value='kia'>50</option>
          <option value='honda'>100</option>
        </select>
      </div>
    </tfoot>
  )
}

export default Foot
