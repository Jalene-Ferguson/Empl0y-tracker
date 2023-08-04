
// index.js

const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require('console.table');

// Create the database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
});

connection.connect((err) => {
  console.log(err)
  if (err) throw err;
  console.log('Connected to the database!');
});



