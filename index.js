const inquirer = require("inquirer");
const express = require("express");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "home",
        message: "Welcome, What would you like to do?",
        choices: [
          "View All Departments",
          "Add Department",
          "View All Roles",
          "Add Role",
          "View All Employees",
          "Add an Employee",
         /*  "View Employess by Department",
          "View Employees by Manager",
          "Update Employee Managers", */
          "Update an Employee Role",
        //   "Delete Departments | Roles | Employees",
          "QUIT",
        ],
        validate: (value) => (value ? true : "Prompt input MANDATORY"),
      },
    ])
    .then((value) => {
        if (value.choices === 'View All Departments') {
            db.query('SELECT * FROM department');
        } else if (value.choices === 'Add Department') {
            db.query('');
        } else if (value.choices === 'View All Roles') {
            db.query('SELECT * FROM role');
        } else if (value.choices === 'Add Role') {
            db.query('');
        } else if (value.choices === 'View All Employees') {
            db.query('SELECT * FROM employee');
        } else if (value.choices === 'Add an Employee') {
            db.query('');
        } else if (value.choices === 'Update an Employee Role') {
            db.query('');
        } else if (value.choices === 'QUIT') {
            return;
        }

    });
};
