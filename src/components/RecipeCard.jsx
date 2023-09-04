import "../assets/RecipeCard.css";

const RecipeCard = (props) => {
    return (
        <div className="recipe-card-container">
            <div className="recipe-title">{props.recipeTitle}</div>
            <div className="ingredients">Ingredients:{props.ingredients}</div>
            <div className="steps">Steps:{props.steps}</div>
        </div>
    )
}

export default RecipeCard