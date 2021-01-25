// import classes  
const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")

// require modules
const inquirer = require("inquirer")
const fs = require("fs")

// shared questions: 
var sharedQs = [
    {
        type: 'input',
        name: 'name',
        message: "Enter employee's name",
        validate: name => {
            if (name) {
                return true
            } else {
                console.log("Please input a valid name entry")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter employee's email address",
        validate: email => {
            if (email && email.includes("@")) {
                return true
            } else {
                console.log("Please enter a valid email address")
                return false
            }
        }
    }, 
    {
        type: 'input',
        name: 'id',
        message: "Enter employee's id",
        validate: id => {
            if (id) {
                return true
            } else {
                console.log("Please enter a valid id")
                return false
            }
        }
    }
]

// application function
function runApp() {
    inquirer
    .prompt([
        sharedQs[0],
        sharedQs[1],
        sharedQs[2],
        {
            type: 'list',
            name: 'role',
            message: "Select employee's role",
            choices: ["Manager", "Engineer", "Intern", "Employee"],
        },
    ]).then(answers => {

        // if manager = role, ask for office number
        if(answers.role === 'Manager') {

            inquirer.prompt([{
                type: 'input',
                name: 'officeNum',
                message: "Enter Manager's office number",
                validate: officeNum => {
                    if (officeNum) {
                        return true;
                    } else {
                        console.log(' Please enter valid office number');
                        return false;
                    }
                }
            }])
            // create manager object
            .then(answers => {
                console.log(answers.officeNum)
                const manager = new Manager(answers.name, answers.email, answers.id, answers.role, answers.officeNum )
                console.log(manager);
            });
        }}
    )
}

runApp()

// prompt user for team information
     // manager --> first
        // name, employee ID, email address, office number
    // AFTER MANAGER --> add engineer, add intern, or finish building
        // engineer
            // name, ID, email, github username --> then back to MENU
        // intern
            // name, ID, email, school --> MENU
        // employee (?)

    // FINISH TEAM --> generate HTML

   

// in the html
    // click an email address and open default email program
    // click github username and open in new tab
