const express = require("express");
const { generateRecipe } = require("../controllers/recipeGeneration.js");

const router = express.Router();

router.post("/", generateRecipe);

module.exports = router;
