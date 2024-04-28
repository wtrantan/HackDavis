const recipes = require('./recipes.js'); 
const users = require('./users.js');   
const ingredients = require('./ingredients.js'); 
const ingredientsRecipes = require('./ingredientsRecipes.js')

const dal = { // dal means Data Access Layer
  recipes,
  users,
  ingredients,
  ingredientsRecipes
};

module.exports = dal;
