const recipes = require('./recipes.js'); 
const users = require('./users.js');   
const ingredients = require('./ingredients.js'); 
const ingredientsRecipes = require('./ingredientsRecipes.js')

const dal = { // dal means Data Access Layer
  recipes: {
    createRecipe : recipes.createRecipe, 
    getRecipe : recipes.getRecipe, 
    getRecipesForUser : recipes.getRecipesForUser
  },
  users: {
    createUser : users.createUser, 
    getUser : users.getUser,
  },
  ingredients: {
    createIngredient : ingredients.createIngredient, 
    getIngredient : ingredients.getIngredient, 
    setQuantity : ingredients.setQuantity
  },
  ingredientsRecipes: {
    createIngredientsRecipes : ingredientsRecipes.createIngredientsRecipes, 
    listIngredientsForRecipe : ingredientsRecipes.listIngredientsForRecipe
  }
};

module.exports = dal;
