const dal = require('../dal');

module.exports = (app) => { // createUsers
  app.post('/api/users', async (req, res) => {
    try {
      const newRecipeData = req.body;
      const createdRecipe = await dal.users.createRecipe(newRecipeData);
      res.json(createdRecipe); // Send response with the created user
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating user' }); // Handle errors
    }
  });
};

module.exports = (app) => { // getUsers
  app.get('/users/:userID', async (req, res) => {
    try {
      const userID = req.params.userID;
      const user = await dal.users.getRecipeById(userID);
      if (!user) {
        return res.status(404).json({ message: 'Recipe not found' }); // Handle user not found
      }
      res.json(user); // Send the retrieved user data
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching user' }); // Handle errors
    }
  });
};