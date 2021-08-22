import React, { useEffect, useState } from 'react'

//import css
import './searchByIngredients.css'

const SearchByIngredients = (props) => {

  const [searchObj, setSearchObj] = useState({ number: 1, ingredients: ["", "", ""] })
  const [result, setResult] = useState([""]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchObj.ingredients}&number=${searchObj.number}&apiKey=ad90f28fbae74c349b5a917fd06a7236`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => console.log(error));
  }, [searchObj])

  const formHandler = (e) => {
    e.preventDefault()
    let ingredientsStr = ""

    searchObj.ingredients.map((item, index) => {
      if (index === 0) {
        ingredientsStr = item
      }
      else if(index !== searchObj.ingredients.length-1){
          ingredientsStr += ", " + item
      }
      
    })

    setSearchObj({ number: searchObj.number, ingredients: ingredientsStr })
    props.querySearch(ingredientsStr)
    props.search(result)
    setSearchObj({ number: 1, ingredients: ["", "", ""] })
  }

  return (
    <div className="form-search text-center ">
      <h4 className="mb-3">Search Recipes By Ingredients</h4>
      <form onSubmit={formHandler}>

        <input type="text" name="ingredient1"
          className="recipes-input form-control w-75 m-auto mb-3"
          placeholder="Enter an ingredient"
          value={searchObj.ingredients[0]}
          onChange={(e) => setSearchObj({ ...searchObj, ingredients: [e.target.value, searchObj.ingredients[1], searchObj.ingredients[2]] })}
        />
        <input type="text" name="ingredient2"
          className="recipes-input form-control w-75 m-auto mb-3"
          placeholder="Enter an ingredient"
          value={searchObj.ingredients[1]}
          onChange={(e) => setSearchObj({ number: searchObj.number, ingredients: [searchObj.ingredients[0], e.target.value, searchObj.ingredients[2]] })}
        />
        <input type="text" name="ingredient3"
          className="recipes-input form-control w-75 m-auto mb-3"
          placeholder="Enter an ingredient"
          value={searchObj.ingredients[2]}
          onChange={(e) => setSearchObj({ number: searchObj.number, ingredients: [searchObj.ingredients[0], searchObj.ingredients[1], e.target.value] })}
        />

        <div id="filters">
          <label>Number of recipes:</label>
          <select
            className="number-select form-control w-25 d-inline my-3 text-center"
            value={searchObj.number}
            onChange={(e) => setSearchObj({ number: e.target.value, ingredients: [searchObj.ingredients[0], searchObj.ingredients[1], searchObj.ingredients[2]] })}
          >
            {
              [...Array(10)].map((x, index) =>
                <option key={index} value={index + 1} className="text-center">{index + 1}</option>)
            }
          </select>
        </div>
        <input type="submit" value="Search" className="btn btn-warning w-50" />
      </form>
    </div>
  )
};

export default SearchByIngredients;

