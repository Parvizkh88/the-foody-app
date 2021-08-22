import {useEffect, useState} from "react"; 

import axios from "axios"
import e from "cors";



function SerachByNutrient(){
    const [searchObj, setSearchObj] = useState({number:3,nutrientMin:10, nutrientMax:40});
 
//    fetch("http" , {})
//     .then( res =>{ return data=res.name} )
//     .then( data =>{ })
//     .catch( err =>{})

// useEffect
    axios.get(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=${searchObj.nutrientMin}&maxCarbs=${searchObj.nutrientMax}&number=${searchObj.number}&apiKey=6a0f4d45753a465bab34d79ab3e601ab`)
    .then( res =>{ console.log(res);} )
    .catch( err =>{})

    // axios.post("ht.....",{user})
    // .then( res =>{ return data=res.name} )
    // .then( data =>{ })
    // .catch( err =>{})

    return(
        <div className="form-search text-center ">
        <h4 className="mb-3">Search Recipes By Nutrient</h4>
        <form >
            <div>
                <input type="text"
                    onChange={(e) => setSearchObj({nutrientMin:e.target.value, nutrientMax:setSearchObj.nutrientMax, number:searchObj.number })}
                />
            </div>
            
           <div>
                <input type="text" 
                    onChange={(e)=>setSearchObj({nutrientMin:searchObj.nutrientMin, nutrientMax:e.target.value, number:searchObj.number})}
                />
           </div>

           <div>
                <select
                    onChange={(e)=>setSearchObj({nutrientMin:searchObj.nutrientMin, nutrientMax:searchObj.nutrientMax, number:e.target.value})}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
          </div>
            <button  type="button" className="btn btn-warning w-50" 
                onClick={()=> console.log("Hello")}
            >Search</button>
        </form>
        </div>
    )
}
export default SerachByNutrient;