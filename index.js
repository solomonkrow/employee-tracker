const inquirer = require("inquirer");
const mysql = require("mysql2");
const server = require("./server");

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
      if (value.choices === "View All Departments") {
        server.query("SELECT * FROM department");
      } else if (value.choices === "Add Department") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "addDep",
              message: "Enter new Department name",
            },
          ])
          .then((response) => {
            const queryString = "INSERT INTO department (division) VALUES (?)";
            const insert = response.division;
            queryString = mysql.format(queryString, insert);
            server.query(queryString, (err, data) => {
              promptUser();
            });
          });
      } else if (value.choices === "View All Roles") {
        server.query("SELECT * FROM roles");
      } else if (value.choices === "Add Role") {
        server.query("INSERT INTO ? ");
      } else if (value.choices === "View All Employees") {
        server.query("SELECT * FROM employee");
      } else if (value.choices === "Add an Employee") {
        server.query("INSERT INTO ? ");
      } else if (value.choices === "Update an Employee Role") {
        server.query("");
      } else if (value.choices === "QUIT") {
        return;
      }
    });
};

promptUser();