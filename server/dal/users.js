const connection = require('./connection.js');

async function createUser(userData) {
    try {

        /*
        userData = {
            email: 'david.is.cool@gmail.com',
            password: 'pasword123'
        };
        */

        const result = await connection.promise().query('INSERT INTO users SET ?', userData);
        return result.insertId;
        console.log('Created user'); 

      } catch (error) { // handles duplicate emails
        if (error.errno === 1062) {
          console.error('Error: Duplicate entry (1062)');
        } else {
          throw error;
        }
      }
}


