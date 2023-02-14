import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recommendation from "./pages/Recommendation.jsx";
import Explore from "./pages/Explore.jsx";
import Favourites from "./pages/Favourites.jsx";
import Sidebar from "./components/Sidebar.jsx";
import axios from 'axios';
import Error from './pages/Error.jsx';
export default function App() {
    const [randomMeal, setRandomMeal] = useState([]);
    const [link, setLink] = useState("OcarztU8cYo");
    const [favourite, setFavourite] = useState();
    const [exploreData, setExploreData] = useState([]);
    const [exploreVideoLink, setExploreVideoLink] = useState();
    const [exploreRecipeLink, setRecipeLink] = useState();
    const [country, setCountry] = useState([]);
    const [category, setCategory] = useState([]);
    const [keyword, setKeyword]=useState("");
    let favBase=[];
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(res => getRandomMeal(res.data.meals[0]))
            .catch(err => console.log(err));
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
            .then(response => setExploreData(response.data.meals))
            .catch(err => console.log(err))
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then(res => setCountry(res.data.meals))
            .catch(err => console.log(err))
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then(res => setCategory(res.data.meals))
            .catch(err => console.log(err))
    }, [])
    function getRandomMeal(randomMeal) {
        setRandomMeal(randomMeal);
        setLink(randomMeal.strYoutube.slice(32));
    }
    function setFavouriteData(MealId) {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
            .then(res => favBase.push(res.data.meals[0]))
            .catch(err => console.log(err));
    }
    function exploreVideo(exploreVideoId) {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${exploreVideoId}`)
            .then(res => setExploreVideoLink(res.data.meals[0].strYoutube))
            .catch(err => console.log(err));
    }
    function exploreRecipe(exploreRecipe) {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${exploreRecipe}`)
            .then(res => setRecipeLink(res.data.meals[0].strSource))
            .catch(err => console.log(err));
    }
    function getCategory(category) {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(response => setExploreData(response.data.meals))
            .catch(err => console.log(err))
    }
    function getArea(area) {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then(response => setExploreData(response.data.meals))
            .catch(err => console.log(err))
    }
    function getBySearch() {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => setExploreData(response.data.meals))
            .catch(err => console.log(err))
    }
    return (
        <div className='container_blog'>
            <BrowserRouter>
                <Sidebar />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Recommendation randomMeal={randomMeal} link={link} setFavouriteData={setFavouriteData} />} />
                        <Route path="/explore" element={<Explore exploreData={exploreData} exploreVideo={exploreVideo} exploreRecipe={exploreRecipe} exploreVideoLink={exploreVideoLink} exploreRecipeLink={exploreRecipeLink} countryList={country} categoryList={category} getCategory={getCategory} getArea={getArea} getBySearch={getBySearch} setKeyword={setKeyword} setFavouriteData={setFavouriteData}/>} />
                        <Route path="/favourites" element={<Favourites favBase={favBase} />} />
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}
