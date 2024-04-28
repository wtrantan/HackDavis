const Recipes = require('./recipes'); 
const Users = require('./users');   
const Ingredients = require('./ingredients'); 

const dal = { // dal means Data Access Layer
  Recipes,
  Users,
  Ingredients,
};

module.exports = dal;
