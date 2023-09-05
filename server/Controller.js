let id = 0
let recipes = [
    {
        id: id++,
        title: "Scrambled Eggs",
        ingredients: "2 Eggs, 1 tbsp butter, 1/4 cup milk",
        steps: "First crack eggs into container. Whisk eggs with milk. Add butter to pan, let pan heat up and pour milk and egg mixture. Stir constantly"

    }
]

export function addRecipe(req, res) {
    const { title, ingredients, steps } = req.body;
    recipes.push({
        id: id++,
        title: title,
        ingredients: ingredients,
        steps: steps
    });
    id = id++;
    res.status(200)
        .json(recipes);
}
export function read(req, res) {
    res.status(200)
        .json(recipes);
}

export function editRecipe(req, res) {
    let { id } = req.params
    let { title, ingredients, steps } = req.body
    
    const index =  recipes.findIndex((recipe) => recipe.id === id)
    
    const recipe = recipes[index]

    recipe.title = title ?? recipe.title
    recipe.ingredients = ingredients ?? recipe.ingredients
    recipe.steps = steps ?? recipe.steps

    res.json(recipe)

}


export function deleteRecipe(req, res){
    const { id } = req.params
    const index = recipes.findIndex((recipe) => recipe.id === id);
    recipes.splice(index, 1)
    res.json(recipes)
    console.log(recipes)
}