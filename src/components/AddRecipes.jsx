import React from 'react'
import { useState } from 'react'


function AddRecipes(props) {
    const [formData, setFormData] = useState({
      title: '',
      ingredients: '',
      steps: '',
    });
  
    const { title, ingredients, steps } = formData;
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleAddRecipe = () => {
      props.addRecipe(formData);
    };
  
    return (
      <div className='input-div'>
        <div>
          <input
            name='title'
            placeholder='Add Recipe Title!'
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name='ingredients'
            placeholder='Add Ingredients!'
            value={ingredients}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name='steps'
            placeholder='Add Steps!'
            value={steps}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button onClick={handleAddRecipe}>Add Recipe</button>
        </div>
      </div>
    );
  }
  
  export default AddRecipes;