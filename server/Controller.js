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
    const editId = req.params.id;
    const recipeEdit = recipes.forEach((el, i) => {
        if (el.id == editId) {
            return recipes[i].purchased = 'Yes';
        }
    });
    res.status(200)
        .json(recipes);
}
export function deleteRecipe(req, res) {

    const deleteId = req.params.id;
    const recipeDelete = recipes.forEach((el, i) => {
        if (el.id == deleteId) {
            recipes.splice(i, 1);
        }
    });
    res.status(200)
        .json(recipes);
}