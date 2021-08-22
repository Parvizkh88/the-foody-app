import React, { useState } from 'react'
//import components
import ShowResult from '../../components/showResult/index.js'
import SearchByIngredients from '../../components/filters/searchByIngredients'
import SearchByNutrient from '../../components/filters/searchByNutrient'


const AdvanceSearch = (props) => {
    const [searchResult, setSearchResult] = useState([]);
    const [querySearch, setQuerySearch] = useState("");
    return (
        <>
        <div className="d-flex justify-content-center">
            <SearchByIngredients
                search={(result) => setSearchResult(result)}
                querySearch={(obj) => setQuerySearch(obj)}
            />

            <SearchByNutrient />
            </div>
            <div className="container">
                <ShowResult results={searchResult} title={{ type: "search-ingredients", querySearch }} />
            </div>
        </>
    )
};

export default AdvanceSearch;