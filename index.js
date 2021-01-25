// import classes  
const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")

// require modules
const inquirer = require("inquirer")
const fs = require("fs")

// shared questions: 
var sharedQs = ["What is their name?", "What is their employee ID?", "What is their email address?"]
// specific questions
var askOffice = "What is their office number?"
var askGithub = "What is their github username?"
var askSchool = "What school do they attend?"

// application function
function runApp() {
    sharedQs.forEach(
        inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: sharedQs[i],
        }])
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
