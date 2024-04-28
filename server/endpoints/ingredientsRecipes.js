const dal = require('../dal');

module.exports = (app) => { // createIngredientsRecipes
    app.post('/api/ingredientsrecipess', async (req, res) => {
      try {
        const newIngredientsRecipesData = req.body;
        const createdIngredientsRecipes = await dal.ingredientsrecipes.createIngredientsRecipes(newIngredientsRecipesData);
        res.json(createdIngredientsRecipes); // Send response with the created ingredientsrecipes
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating ingredientsrecipes' }); // Handle errors
      }
    });
  };
  

module.exports = (app) => { // getIngredientsForRecipe
    app.get('/ingredients/:recipeID', async (req, res) => {
      try {
        const recipeID = req.params.recipeID;
        const ingredient = await dal.ingredientsRecipes.listIngredientsForRecipe(recipeID);
        if (!ingredient) {
          return res.status(404).json({ message: 'Ingredients not found' }); // Handle ingredient not found
        }
        res.json(ingredients); // Send the retrieved ingredient data
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching ingredients' }); // Handle errors
      }
    });
  };