const fs = require("fs");
const inquirer = require("inquirer");
const { viewDepartments } = require("../department");

const questions = [
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    {
      type: "input",
      name: "purpose",
      message: "What would you like to do?",
    },
    {
      type: "input",
      name: "department",
      message: "What is the name of the department?",
    },
    {
      type: "input",
      name: "role",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
        type: "list",
        name: "roleDepartment",
        message: "Which department does the role belong to?",
        choices: ["Engineering", "Finance", "Legal", "Sales", "Service"],
      },
  ];
  

  module.exports = async function(cliConnection) {
    console.log("Welcome to the Employee Tracker!");
  
  while (true) {
    const { action } = await inquirer.prompt([
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all employees',
      'View all roles',
      'View all departments',
      'Add role',
      'Add employee',
      'Add department',
      'Update employee role',
      'Exit',
    ],
  },
    ]);
  
    switch (action) {
      case 'View all employees':
        break;
        case 'View all roles':
        break;
        case 'View all departments':
        break;
        case 'Add employee':
        break;
        case 'Add department':
        break;
        case 'Add role':
        break;
        case 'Update employee role':
        break;
        case 'Exit':
        console.log("Goodbye!");
        connection.end();
        return;
        default:
          console.log("Invalid action");
    }
  }
  
  };

  switch (action) {
  case "View all departments":
    viewDepartments(connection);
    break;
  };