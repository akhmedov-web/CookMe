import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Recommendation({ randomMeal, link, setFavouriteData }) {
  const notify=()=>{
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
  return (
    <div className='recommendation'>
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
      <div className="recommendation_card">
        <iframe className='recommendation_video' src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='recommendation_card_body'>
          <h3>{randomMeal.strMeal}</h3>
          <img src={randomMeal.strMealThumb} alt="food" className='recommendation_meal' />
        </div>
        <div className='recommendation_buttons'>
          <a className='recommendation_btn' href={randomMeal.strSource} target="_blank"><button className='btn btn-success w-100'><i className="fa-solid fa-plate-wheat"></i> Recipe</button></a>
          <button onClick={() => {setFavouriteData(randomMeal.idMeal); notify()}} className='btn btn-danger recommendation_btn'><i className="fa-solid fa-heart-crack"></i> Favourite</button>
        </div>
      </div>
    </div>
  )
}
