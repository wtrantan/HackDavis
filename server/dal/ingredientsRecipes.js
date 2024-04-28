const connection = require('./connection.js'); 

async function createIngredientsRecipes(ingredientsrecipesData) {
    try {

        /*
        ingredientsrecipessRecipes = {
            ingredientsrecipesName: 'Jasmine Rice',
            quantity: 7,
            measurementUnit: 'pounds'
        };
        */

        const result = await connection.promise().query('INSERT INTO ingredientsrecipess SET ?', ingredientsrecipesData);
        console.log('Created ingredientsrecipes');
        return result.insertId;

    } catch (error) { // handles foreign key restraint
        if (error.errno === 1452) {
            console.error('Error: Fails foreign key restraint (1452)');
        } else {
            throw error;
        }
    }
}

async function getIngredientsRecipes(ingredientsrecipesID) {
    const result = await connection.promise().query('SELECT * FROM ingredientsrecipess WHERE ingredientsrecipesID = ?', ingredientsrecipesID);
    console.log(result[0][0]);
    return result[0][0];
}

userData = {
    ingredientsrecipesName: 'Jasmine Rice',
    quantity: 7,
    measurementUnit: 'pounds'
};

getIngredientsRecipes(1);

module.exports = { createIngredientsRecipes, getIngredientsRecipes };
