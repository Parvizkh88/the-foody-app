import React, { useEffect, useState } from 'react'

//import css
import './Home.css'

import SearchRecipes from '../../components/searchRecipes'
import ShowResult from '../../components/showResult'

const Home = () => {
  const [newRecipes, setNewRecipes] = useState([]);
  const [healthiness, setHealthiness] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [querySearch, setQuerySearch] = useState({});

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?number=3&apiKey=2111d2ffc8e049adb118bd772a5ca9a4"
    )
      .then((response) => response.json())
      .then((data) => {
        setNewRecipes(data.recipes);
             })
      .catch((error) => console.log(error));
  }, [])

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?sort=healthiness&number=3&apiKey=6a0f4d45753a465bab34d79ab3e601ab"
    )
      .then((response) => response.json())
      .then((data) => {
        setHealthiness(data.results);
             })
      .catch((error) => console.log(error));
  }, [])


  return (
    <>
      <div className="position-relative">
        <div className="cover-image "></div>
        <SearchRecipes
          search={(result) => setSearchResult(result)}
          querySearch={(obj) => setQuerySearch(obj)}
        />
      </div>
      <div className="container">
        {
          searchResult.length
          ?
              <ShowResult results={searchResult} title= { { type :"search-recipes", querySearch}} />
          :
          <>
              <ShowResult results={newRecipes} title={{ type:"New Recipes" }} />
              <ShowResult results={healthiness} title={{ type:"healthiness" }} />
          </>
        }
      </div>
    </>
  )
}

export default Home;