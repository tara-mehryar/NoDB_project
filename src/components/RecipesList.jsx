
import axios from 'axios';
import React, { useState } from 'react';

function RecipesList({ recipe, deleteRecipe, editRecipe }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(recipe);
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.description);
  const [steps, setSteps] = useState(recipe.steps);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe({ ...editedRecipe, [name]: value });
  };

  const handleEditClick = () => {
    
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const { data } = await axios.post(`/api/editRecipe/${recipe.id}`, (req, res) => {
      title,
      ingredients,
      steps
    })
    
    // editRecipe(editedRecipe);
    setTitle( data.title )
    setIngredients( data.ingredients )
    setSteps( data.steps )
    setIsEditing(false);
    console.log(recipe)
  };

  return (
    <div className='inner'>
      <h4>{isEditing ? <input type="text" name="title" value={editedRecipe.title} onChange={handleInputChange} /> : editedRecipe.title}</h4>
      <p>{isEditing ? <input type="text" name="ingredients" value={editedRecipe.ingredients} onChange={handleInputChange} /> : editedRecipe.ingredients}</p>
      <p>{isEditing ? <input type="text" name="steps" value={editedRecipe.steps} onChange={handleInputChange} /> : editedRecipe.steps}</p>
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
}

export default RecipesList;