const connection = require('./connection.js');

async function createIngredient(ingredientData) {
    try {

        /*
        ingredientData = {
            ingredientName: 'Jasmine Rice',
            quantity: 7,
            measurementUnit: 'pounds'
        };
        */

        const result = await connection.promise().query('INSERT INTO ingredients SET ?', ingredientData);
        console.log('Created ingredient');
        return result.insertId;

    } catch (error) { // handles foreign key restraint
        if (error.errno === 1452) {
            console.error('Error: Fails foreign key restraint (1452)');
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

async function setQuantity(ingredientID, quantity) { 
    const updateResult = await connection.promise().query(
        'UPDATE ingredients SET quantity = ? WHERE ingredientID = ?', [quantity, ingredientID]);
    return getIngredient(ingredientID)
}

setQuantity(1, 4);

module.exports = { createIngredient, getIngredient, setQuantity };
