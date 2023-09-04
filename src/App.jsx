import React from "react";
import "./App.css";
import recipes from "../recipes.json";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";


const App = () => {
    return (
        <>
        <Header />
        <main>
            {recipes.map(( { id,recipe_title, ingredients, steps } ) => {
               return <RecipeCard 
                    id={id}
                    recipeTitle={recipe_title}
                    ingredients={ingredients}
                    steps={steps}
               />

            })}
        </main>
        </>
    )
}

export default App