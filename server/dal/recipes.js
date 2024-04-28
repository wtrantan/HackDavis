const connection = require('./connection.js');

async function createRecipe(recipeData) {
    try {

        /*
        recipeData = {
            recipeName: 'Fried Rice',
            calories: 300,
            userID: 4
        };
        */

        const result = await connection.promise().query('INSERT INTO recipes SET ?', recipeData);
        console.log('Created recipe');
        return result.insertId;

    } catch (error) { // handles foreign key restraint
        if (error.errno === 1452) {
            console.error('Error: Fails foreign key restraint (1452)');
        } else {
            throw error;
        }
    }
}

async function getRecipe(recipeID) {
    const result = await connection.promise().query('SELECT * FROM recipes WHERE recipeID = ?', recipeID);
    console.log(result[0][0]);
    return result[0][0];
}

/*
Return for getRecipesForUser sorta looks like this:
[
  { recipeID: 4, recipeName: 'radishCake', userID: 14, calories: 200 },
  { recipeID: 5, recipeName: 'Ramen', userID: 14, calories: 400 }
]
*/

async function getRecipesForUser(userID) {
    const result = await connection.promise().query('SELECT * FROM recipes WHERE userID = ?', userID);
    console.log(result[0]);
    return result[0];
}

module.exports = { createRecipe, getRecipe, getRecipesForUser };
