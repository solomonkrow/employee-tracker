const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./server");
const cTable = require('console.table');

const server = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'kittens',
        database: 'employee_db'
    },
    console.log('Connection to Employee Database (employee_db) established')
);

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
        // console.log(value);
      if (value.home === "View All Departments") {
        server.query("SELECT * FROM department", (err, results)=> {
            console.table(results);
            promptUser();
        });
      } else if (value.home === "Add Department") {
        inquirer.prompt([
            {
              type: "input",
              name: "addDep",
              message: "Enter new Department name",
            },
          ])
          .then((answer) => {
            console.log(answer);
            var queryString = `INSERT INTO department (division) VALUES ('?');`;
            var inserts = [answer];
            queryString = mysql.format(queryString, inserts);
            server.query(queryString, (err, results) => {
                console.log('New Department Added: '+ answer);
                promptUser();
            });
          });
      } else if (value.home === "View All Roles") {
        server.query("SELECT * FROM roles", (err, results)=> {
            console.table(results);
            promptUser();
        });
      } else if (value.choices === "Add Role") {
        server.query("INSERT INTO ? ");
      } else if (value.home === "View All Employees") {
        server.query("SELECT first_name, last_name, manager_id FROM employee", (err, results)=> {
            console.table(results);
            promptUser();
        });
      } else if (value.choices === "Add an Employee") {
        server.query("INSERT INTO ? ");
      } else if (value.choices === "Update an Employee Role") {
        server.query("");
      } else if (value.home === "QUIT") {
        return;
      }
    });
};

promptUser();