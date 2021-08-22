import React, { useEffect, useState } from 'react'

//import css
import './SearchRecipes.css'

const SearchRecipes = (props) => {
  const [searchObj, setSearchObj] = useState({ number: 1, recipes: "" })
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchObj.recipes}&number=${searchObj.number}&apiKey=2111d2ffc8e049adb118bd772a5ca9a4`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data.results);
      })
      .catch((error) => console.log(error));
  }, [searchObj])

  const formHandler = (e) => {
    e.preventDefault()
    setSearchObj({ number: searchObj.number, recipes: searchObj.recipes })
    props.querySearch(searchObj)
    props.search(result)
    setSearchObj({ number: 1, recipes: "" })
  }
  return (
    <div className="form-search position-absolute text-center ">
      <h4 className="mb-3">Search Recipes of Foods</h4>
      <form onSubmit={formHandler}>
        <input type="text" name="recipes"
          className="recipes-input form-control w-75 m-auto"
          placeholder="Search Recipes"
          value={searchObj.recipes}
          onChange={(e) => setSearchObj({ ...searchObj, recipes: e.target.value })}
        />
        <div id="filters">
          <label>number of recipes:</label>
          <select
            className="number-select form-control w-25 d-inline my-3 text-center"
            value={searchObj.number}
            onChange={(e) => setSearchObj({ ...searchObj,number: e.target.value })}
          >
            {
                [...Array(10)].map((item, index) =>
                <option key={index} value={index + 1} className="text-center">{index + 1}</option>)
            }
          </select>
        </div>
        <input type="submit" value="Search" className="btn btn-warning w-50" />
      </form>
    </div>
  )
};

export default SearchRecipes;

