// import classes  
const Employee = require("./Employee.js")
const Manager = require("./Manager.js")
const Engineer = require("./Engineer.js")
const Intern = require("./Intern.js")

// create empty array to put html info into later
const html = [];

// create the team
const generateTeam = (team) => {
    console.log("Making your Team!");
    // loop through team and check each role
    for (i=0; i<team.length; i++) {
        switch(team[i].getRole()) {
            case "Manager":
                const managerCard = generateManager(team[i])
                html.push(managerCard)
                break;
            case "Engineer":
                const engineerCard = generateEngineer(team[i])
                html.push(engineerCard)
                break;
            case "Intern":
                const internCard = generateIntern(team[i])
                html.push(internCard)
                break;
            case "Employee":
                const employeeCard = generateEmployee(team[i])
                html.push(employeeCard) 
                break;                     
       
        }
        console.log(html);
        console.log("All done! Now making your page...")
        
    }
    return html.join("")
}
  // create the manager html
  const generateManager = (manager) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNum()}}</li>
            </ul>
        </div>
    </div>
        `;
  };

  // create the html for engineers
  const generateEngineer = (engineer) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
  };

  // create the html for interns
  const generateIntern = (intern) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
  };

  // create html for generic employees
  const generateEmployee = (employee) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${employee.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        </ul>
    </div>
</div>
        `;
  };

module.exports = function maketeam(team) {
  return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
