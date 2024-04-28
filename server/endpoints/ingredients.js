const dal = require('../dal');

module.exports = (app) => { // createIngredients
  app.post('/api/ingredients', async (req, res) => {
    try {
      const newRecipeData = req.body;
      const createdRecipe = await dal.ingredients.createRecipe(newRecipeData);
      res.json(createdRecipe); // Send response with the created ingredient
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating ingredient' }); // Handle errors
    }
  });
};

module.exports = (app) => { // getIngredients
  app.get('/ingredients/:ingredientID', async (req, res) => {
    try {
      const ingredientID = req.params.ingredientID;
      const ingredient = await dal.ingredients.getRecipeById(ingredientID);
      if (!ingredient) {
        return res.status(404).json({ message: 'Recipe not found' }); // Handle ingredient not found
      }
      res.json(ingredient); // Send the retrieved ingredient data
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching ingredient' }); // Handle errors
    }
  });
};

const dal = require('../dal'); // Assuming DAL is in ../dal/index.js' or the relevant file

module.exports = (app) => {
  app.put('/recipes/:recipeId/ingredients/:ingredientId', async (req, res) => {
    try {
      const recipeId = req.params.recipeId;
      const ingredientId = req.params.ingredientId;
      const newQuantity = req.body.quantity;

      const updatedIngredient = await dal.recipes.setIngredientQuantity(recipeId, ingredientId, newQuantity);
      if (!updatedIngredient) {
        return res.status(404).json({ message: 'Recipe or ingredient not found' }); // Handle recipe/ingredient not found
      }
      res.json(updatedIngredient); // Send the updated ingredient data
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating ingredient quantity' }); // Handle errors
    }
  });
};
