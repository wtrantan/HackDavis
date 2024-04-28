const connection = require('./connection.js');



async function createUser(userData) {
    try {

        /*
        userData = {
            email: 'david.is.cool@gmail.com',
            password: 'pasword123'
        };
        */

        userAlreadyExists(userData.email);

        const result = await connection.promise().query('INSERT INTO users SET ?', userData);
        return result.insertId;
        console.log('Created user') 

      } catch (error) {
        throw error; 
      }
}

async function userAlreadyExists(email) {
    try {
        const query = ` SELECT EXISTS ( SELECT 1 FROM users WHERE email = ? ); `;
        const result = await connection.promise().query(query, email);
        console.log(result);
    } catch (error) {
        throw error;
    }
}

testData = {
    email: 'asd@gamil.com',
    password: 'aaa'
};

createUser(testData);
