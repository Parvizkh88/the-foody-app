function ShowResultHeader({title}){

    return(
       
    
        <h5 className="section-header bg-dark text-light p-3 rounded-top m-0">{title.type}

        {
            title.querySearch
            ?
                <>
                <span>Result For Search of</span>
                {
                    title.type === "search-recipes"
                    ?
                    <span>  Recipes: " {title.querySearch.recipes} ", Number: {title.querySearch.number}</span>
                    :
                    <span>  Recipes by Ingredients: {title.querySearch}</span>
                }
                </>

            :
            ""
        }
          </h5>
        
    )
} 
export default ShowResultHeader;