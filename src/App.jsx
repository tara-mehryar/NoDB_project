import React from 'react'
import "./App.css"
import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddRecipes  from './components/AddRecipes'
import RecipesList  from './components/RecipesList'


function App() {
    const [recipes, setRecipes] = useState([]);
  
    const read = () => {
      axios.get('/api/allRecipes')
        .then((response) => {
          console.log(response.data);
          setRecipes(response.data);
        })
        .catch((error) => console.log(error));
    };
  
    const editRecipe = (id) => {
      axios.put(`/api/editRecipe/${id}`)
        .then((response) => setRecipes(response.data));
    };
  
    const deleteRecipe = (id) => {
      axios.delete(`/api/deleteRecipe/${id}`)
        .then((response) => setRecipes(response.data));
    };
  
    const addRecipe = (obj) => {
      axios.post('/api/addRecipe', obj)
        .then((response) => setRecipes(response.data));
    };
  
    useEffect(() => {
      read();
    }, []);
  
    const display = recipes.map((e, i) => (
      <RecipesList key={e.id} recipe={e} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />
    ));
  
    return (
      <div className="App">
        <Header />
        <div className='input-container'>
          <AddRecipes addRecipe={addRecipe} />
        </div>
        <div className='container'>
          {display}
        </div>
      </div>
    );
  }
  
  export default App;
