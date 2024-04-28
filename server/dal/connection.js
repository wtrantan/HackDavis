const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'hackdavis2024.cvymayoqa2xl.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'asdasdasd',
  database: 'foodger'
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting', error);
    return;
  }
  console.log('Connected');
});

module.exports = connection;
