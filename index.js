// import classes  
const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")

// require modules
const inquirer = require("inquirer")
const fs = require("fs")

// import generateTeam function
const generateTeam = require("./lib/page-template.js")

// create empty list to push employees to later
var team = []

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
        type: 'list',
        name: 'role',
        message: "Select employee's role",
        choices: ["Manager", "Engineer", "Intern", "Employee"],
    }
    
]

// add new member function
function addNew() {
    inquirer
    .prompt([
        sharedQs[0],
        sharedQs[1],
        sharedQs[2],
        sharedQs[3],
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
            .then(answers2 => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers2.officeNum, answers.role)
                team.push(manager);
                addMore()
            });

            // if engineer, ask for github account name
        } else if (answers.role === "Engineer") {

            inquirer.prompt([{
                type: 'input',
                name: 'github',
                message: "Enter Engineer's github account name",
                validate: github => {
                    if (github) {
                        return true
                    } else {
                        console.log(' Please enter valid office number');
                        return false
                    }
                }
            }])
            .then(answers2=> {
                console.log(answers2.github)
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers2.github, answers.role)
                team.push(engineer);
                addMore();
            })
        
            // if intern, ask for school name
        } else if (answers.role === "Intern") {

            inquirer.prompt([{
                type: 'input',
                name: 'school',
                message: "Enter intern's school name",
                validate: school => {
                    if (school) {
                        return true
                    } else {
                        console.log(' Please enter valid school name');
                        return false
                    }
                }
            }])
            .then(answers2 => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers2.school, answers.role)
                team.push(intern);
                addMore();
            })

            // if employee, ask make new employee
        } else if (answers.role = "Employee") {
                const employee = new Employee(answers.name, answers.id, answers.email, answers.role = "Employee")
                team.push(employee);
                addMore();
        }
    })
}

function addMore() {
    inquirer
    .prompt([{
        type: 'confirm',
        name: 'addMore',
        message: 'Would you like to add another team member?',
    }])
    .then(answer => {
        if (answer.addMore) {
            addNew()
        } else {

            const generatedHTML = generateTeam(team)

            fs.writeFile("./dist/index.html", generatedHTML, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("HTML created successfully! Go check out dist...")
                }
            })
        }
    })
}

addNew()