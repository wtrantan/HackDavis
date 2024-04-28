const dal = require('../dal');

module.exports = (app) => { // createRecipe
  app.post('/api/recipes', async (req, res) => {
    try {
      const newRecipeData = req.body;
      const createdRecipe = await dal.recipes.createRecipe(newRecipeData);
      res.json(createdRecipe); // Send response with the created recipe
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating recipe' }); // Handle errors
    }
  });
};

module.exports = (app) => { // getRecipes
  app.get('/recipes/:recipeID', async (req, res) => {
    try {
      const recipeID = req.params.recipeID;
      const recipe = await dal.recipes.getRecipeById(recipeID);
      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' }); // Handle recipe not found
      }
      res.json(recipe); // Send the retrieved recipe data
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching recipe' }); // Handle errors
    }
  });
};

module.exports = (app) => { // getRecipesForUser
    app.get('/recipes/:userID', async (req, res) => {
      try {
        const userID = req.params.userID;
        const recipe = await dal.recipes.getRecipesForUser(userID);
        if (!recipe) {
          return res.status(404).json({ message: 'Recipes not found' }); // Handle recipe not found
        }
        res.json(recipes); // Send the retrieved recipe data
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching recipes' }); // Handle errors
      }
    });
  };
