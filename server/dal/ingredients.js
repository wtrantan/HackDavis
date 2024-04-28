const connection = require('./connection.js');

async function createIngredient(ingredientData) {
    try {

        /*
        userData = {
            ingredientName: 'Jasmine Rice',
            quantity: 7,
            measurementUnit: 'pounds'
        };
        */

        const result = await connection.promise().query('INSERT INTO ingredients SET ?', ingredientData);
        console.log('Created ingredient');
        return result.insertId;

    } catch (error) { // handles duplicate ingredientNames
        if (error.errno === 1062) {
            console.error('Error: Duplicate entry (1062)');
        } else {
            throw error;
        }
    }
}

async function getIngredient(ingredientID) {
    const result = await connection.promise().query('SELECT * FROM ingredients WHERE ingredientID = ?', ingredientID);
    console.log(result[0][0]);
    return result[0][0];
}

userData = {
    ingredientName: 'Jasmine Rice',
    quantity: 7,
    measurementUnit: 'pounds'
};

getIngredient(1);

module.exports = { createIngredient, getIngredient };
