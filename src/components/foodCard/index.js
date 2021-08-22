import {Link} from "react-router-dom"
//import css
import './FoodCard.css'

const FoodCard = ({ image, title, summary,id}) => {

  return (
    <div className="food-card bg-danger me-3 mb-3 ">
      <img src={image} alt="" />
      <div className="p-3 food-detail">
        <h5 className="food-title">{title}</h5>
        <p className="">{summary}</p>
      </div>
      <Link to={`/recipes-detail/${id}`} className="btn btn-warning w-100 p-2">More...</Link>
    </div>
  )
};

export default FoodCard;