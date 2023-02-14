import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Plate from "../images/empty_plate.png";

export default function Explore({ exploreData, exploreVideo, exploreRecipe, exploreVideoLink, exploreRecipeLink, countryList, categoryList, getCategory, getArea, getBySearch, setKeyword, setFavouriteData }) {
  const notify = () => {
    toast.success("Added to 'Favourites' ", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  console.log(exploreData)
  return (
    <div className='explore'>
      <div className="sort_blog">
        <div className='input-group search_group'>
          <input className='form form-control' type="text" onInput={(e) => setKeyword(e.target.value)} />
          <button className='btn btn-success' onClick={() => getBySearch()}>Search</button>
        </div>
        <div className='select_wrapper'>
          <select className="form-select text-white h-50 me-2" onChange={(e) => getCategory(e.target.value)} style={{ backgroundColor: "#1F1D2B" }} aria-label="Default select example">
            {categoryList.map(item =>
              <option value={item.strCategory}>{item.strCategory}</option>
            )}
          </select>
          <select className="form-select text-white h-50" onChange={(e) => getArea(e.target.value)} style={{ backgroundColor: "#1F1D2B" }} aria-label="Default select example">
            {countryList.map(item =>
              <option value={item.strArea}>{item.strArea}</option>
            )}
          </select>
        </div>
      </div>
      <div className="explore_card_blog">
        {exploreData!==null ? exploreData.map(item =>
            <div className='explore_card' key={item.idMeal}>
              <img src={item.strMealThumb} alt="img" />
              <h6 className='ms-2'>{item.strMeal}</h6>
              <div className="explore_card_buttons w-100">
                <a className='explore_button' href={exploreVideoLink} target="_blank"><button onClick={() => exploreVideo(item.idMeal)} className='btn btn-outline-warning w-100 mb-1'><i className="fa-brands fa-youtube"></i> <span>Tutorial</span></button></a>
                <a className='explore_button' href={exploreRecipeLink} target="_blank"><button onClick={() => exploreRecipe(item.idMeal)} className="btn btn-outline-success w-100 mb-1"><i className="fa-solid fa-plate-wheat"></i> <span>Recipe</span></button></a>
                <a className='explore_button'><button onClick={() => {setFavouriteData(item.idMeal); notify() }} className='btn btn-outline-danger w-100'><i className="fa-solid fa-heart-crack"></i> <span>Favourite</span></button></a>
              </div>
            </div>)
            :
            <div className="error_container">
            <p className='error_text'>Sorry. We have no this kind of food :(</p>
            <img src={Plate} alt="img" className='error-img' />
          </div>
        }
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
