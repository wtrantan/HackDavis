const connection = require('./connection.js');

async function createUser(userData) {
  try {

    /*
    userData = {
        name: 'david',
        email: 'david.is.cool@gmail.com',
        password: 'pasword123'
    };
    */

    const result = await connection.promise().query('INSERT INTO users SET ?', userData);
    console.log('Created user');
    return result.insertId;

  } catch (error) { // handles duplicate emails
    if (error.errno === 1062) {
      console.error('Error: Duplicate entry (1062)');
    } else {
      throw error;
    }
  }
}

async function getUser(userID) {
  const result = await connection.promise().query('SELECT * FROM users WHERE userID = ?', userID);
  returnresult[0][0];
}
