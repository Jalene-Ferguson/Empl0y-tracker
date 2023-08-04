const fs = require("fs");
const inquirer = require("inquirer");

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
      name: "departmentName",
      message: "What is the name of the department?",
    },
    {
      type: "input",
      name: "roleName",
      message: "What is the name of the role?",
    },
    {
      type: "input",
      name: "roleSalary",
      message: "What is the salary of the role?",
    },
    {
        type: "list",
        name: "departmentForRole",
        message: "Which department does the role belong to?",
        choices: ["Engineering", "Finance", "Legal", "Sales", "Service"], // Replace with actual department names or fetch from the database
      },
  ];
  