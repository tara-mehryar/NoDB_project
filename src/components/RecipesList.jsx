import React from 'react'

function RecipesList({ recipe, deleteRecipe, editRecipe }) {
    return (
      <div className='inner'>
        <h4>{recipe.title}</h4>
        <p>{recipe.ingredients}</p>
        <p>{recipe.steps}</p>
        <button onClick={() => deleteRecipe(recipe.id)}>Delete!</button>
        <button onClick={() => editRecipe(recipe.id)}>Edit!</button>
      </div>
    );
  }
  
  export default RecipesList;