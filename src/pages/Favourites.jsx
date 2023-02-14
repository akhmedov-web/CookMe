import React from 'react'
import Plate from "../images/empty_plate.png"
export default function Favourites({ favBase }) {
  console.log(favBase)
  return (
    <div className='favourites'>
      <div className="favourites_blog p-4">
      {favBase.length ? favBase.map(item=>
      <div className='favourites_card'>
        <img src={item.strMealThumb} alt="img" />
        <h5>{item.strMeal}</h5>
        <div className="favourites_card_buttons">
          <a target="_blank" href={item.strYoutube}><button className='btn btn-outline-danger mb-1 w-100'><i className="fa-brands fa-youtube"></i> Tutorial</button></a>
          <a target="_blank" href={item.strSource}><button className="btn btn-outline-success w-100"><i className="fa-solid fa-plate-wheat"></i> Recipe</button></a>
        </div>
      </div>
      )
        :
        <div className="favourites_empty">
          <p className='favourites_empty_text'>No favourites yet :(</p>
          <img src={Plate} alt="img" className='favourites_empty_img' />
        </div>
      }
      </div>
    </div>
  )
}
