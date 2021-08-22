import React, { useEffect, useState } from 'react'
//import css
import './RecipesDetail.css'

const RecipesDetail = (props) => {

    const id = props.match.params.id
    const [recipes, setRecipes] = useState({})
    const [extendedIngredients, setExtendedIngredients] = useState([])

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=2111d2ffc8e049adb118bd772a5ca9a4`
        )
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data);
                setExtendedIngredients(data.extendedIngredients)
            })
            .catch((error) => console.log(error));
    }, [])
    return (
        <div className="bg-white p-5 w-75 m-auto mt-3">
            {
                recipes.status == 404 || recipes.status == "failure"
                    ?
                    <p>This recipe does not exist.</p>
                    :
                    <div>
                        <div class="photo-holder m-auto">
                            <img src={recipes.image} alt="" className="recipes-image-detail" />
                            <div className="overlay">
                                <div class="text-photo">add to favorite</div>
                            </div>
                        </div>

                        <div className="p-3 ">
                            <h3 className="p-3 text-center">{recipes.title}</h3>
                            <div className="ingredients p-3 m-3 font-weight-bold">
                                <h4>Ingredients:</h4>
                                {
                                    extendedIngredients.map((item, index) => <span>
                                        <span className="pe-2">{item.nameClean.charAt(0).toUpperCase() + item.nameClean.slice(1)}</span>
                                        <span className="pe-1">{item.amount}</span>
                                        <span>{item.unit}</span>
                                        <span>{index === (extendedIngredients.length - 1) ? "." : ", "} </span>
                                    </span>)
                                }
                            </div>
                            <p className="text-justify summary-recipes" dangerouslySetInnerHTML={{ __html: recipes.summary }}></p>
                        </div>
                    </div>
            }
        </div>
    )
};

export default RecipesDetail;