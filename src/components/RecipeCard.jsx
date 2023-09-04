import "../assets/RecipeCard.css";
import Ingredients from "./Ingredients"

const RecipeCard = () => {
    return (
        <div className="recipe-card-container">
            <div className="recipe-title">Recipe Title</div>
            <div className="ingredients"> <Ingredients /> </div>
        </div>
    )
}

export default RecipeCard