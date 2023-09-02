
// index.js

const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const consoleTable = require('console.table');
const cli = require("./lib/cli");

const { viewDepartments } = require("./department");

// Create the database connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'tracker_db',
});

connection.connect((err) => {
  console.log(err)
  if (err) throw err;
  console.log('Connected to the database!');
});

cli(connection);

process.on('exit', () => {
  connection.end();
})

switch (action) {
  case "View all departments":
    viewDepartments(connection);
    break;
}