const connection = require('./connection.js'); 

async function createIngredientsRecipes(ingredientsrecipesData) {
    try {

        /*
        ingredientsrecipessRecipes = {
            ingredientID: 2,
            recipeID: 7,
            quantity: 35
        };
        */

        const result = await connection.promise().query('INSERT INTO ingredientsrecipes SET ?', ingredientsrecipesData);
        console.log('Created ingredientsrecipe');
        return result.insertId;

    } catch (error) { // handles foreign key restraint
        if (error.errno === 1452) {
            console.error('Error: Fails foreign key restraint (1452)');
        } else {
            throw error;
        }
    }
}

async function listIngredientsForRecipe(recipeID) {
    const result = await connection.promise().query('SELECT FROM ingredientsrecipes WHERE recipeID == ?', ingredientsrecipesData);
    console.log(result[0]);
    return result[0];
}



module.exports = { createIngredientsRecipes };
