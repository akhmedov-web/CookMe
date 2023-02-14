import React from 'react'
import Plate from "../images/empty_plate_404.png";
export default function Error() {
  return (
    <div className="error_container">
          <img src={Plate} alt="img" className='error-img' />
    </div>
  )
}
