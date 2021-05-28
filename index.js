// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamMembers = [];

// START APPLICATION FUNCTION

    function initApp() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'start',
                message: 'Hello fellow coder! Ready to put together your team profile??',
            },
            {
                type: 'list',
                message: 'Select an employee role from the list below:',
                choices: ['Manager', 'Engineer', 'Intern'],
                name: 'role'
            },

        ])
                .then ((employeeInfo) => {
            if(employeeInfo.role === 'Manager') {
                console.log('Add Manager information');
                getManager()

            } else if (employeeInfo.role  === 'Engineer') {
                console.log('Add Engineer information');
                getEngineer()
                
            } else if (employeeInfo.role  === 'Intern ') {
                console.log('Add Intern');
                getIntern()

            } else (employeeInfo.role === '') 
        });
    };

 

    // GET MANAGER DATA FUNCTION
    function getManager() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the manager\'s name?',
                name: 'name',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter manager\'s name!');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Enter manager ID:',
                name:'id',
                validate: idInput => {
                    if (idInput) {
                      return true;
                    } else {
                      console.log('Please enter an id.');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Please manager\'s email.',
                name: "email",
                validate: emailInput => {
                    if (emailInput) {
                      return true;
                    } else {
                      console.log('Please enter a valid email.');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Please enter manager\'s office number.',
                name: 'officeNumber',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                      return true;
                    } else {
                      console.log('Please enter an office number.');
                      return false;
                    }
                 }
            }
        ])
            .then((employeeInfo) => {
                const addManager = new Manager(
                    employeeInfo.name, 
                    employeeInfo.id, 
                    employeeInfo.email, 
                    employeeInfo.officeNumber
                );
                teamMembers.push(addManager);
                    // console.log(addManager)
                addNewEmployee();
            });
    };

    //GET TEAM MEMBER DATA FUNCTION
    function addNewEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Select an employee role from the list below:',
                choices: ['Manager', 'Engineer', 'Intern', 'Profile complete. No more team members to add!'],
                name: 'role'
            },

        ])
        .then ((employeeInfo) => {
            if(employeeInfo.role === 'Manager') {
                console.log('Add Manager information');
                getManager()

            } else if (employeeInfo.role  === 'Engineer') {
                console.log('Add Engineer information');
                getEngineer()
                
            } else if (employeeInfo.role  === 'Intern') {
                console.log('Add Intern');
                getIntern()

            } else {
                console.log('Profile complete. No more team members to add!')
                fs.writeFile('./dist/team.html', starterHtml(), err => {
                    if (err) throw err; 
                    console.log('Successfully created team HTML file!')
                })
            }
        });
    };



    // ADD ENGINEER 
    function getEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Please enter engineer name.',
                name: 'name',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Must enter engineer\'s name!');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Please enter engineer\'s ID:',
                name:'id',
                validate: idInput => {
                    if (idInput) {
                      return true;
                    } else {
                      console.log('Please enter an id.');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Please enter engineer\'s email.',
                name: "email",
                validate: emailInput => {
                    if (emailInput) {
                      return true;
                    } else {
                      console.log('Please enter a valid email.');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Please enter engineer\'s gitHub.',
                name: 'gitHub',
                validate: gitHubInput => {
                    if (gitHubInput) {
                      return true;
                    } else {
                      console.log('Please enter a gitHub.');
                      return false;
                    }
                  }
            }
        ])
            .then((employeeInfo) => {
                const addEngineer = new Engineer(
                    employeeInfo.name, 
                    employeeInfo.id, 
                    employeeInfo.email, 
                    employeeInfo.gitHub
                );
                teamMembers.push(addEngineer);
                    // console.log(addEngin)
                addNewEmployee();
            });
    };

    // ADD INTERN
    function getIntern() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the intern\'s name?',
                name: 'name',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter a name!');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Enter manager ID:',
                name:'id',
                validate: idInput => {
                    if (idInput) {
                      return true;
                    } else {
                      console.log('Please enter an id.');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Please manager\'s email.',
                name: "email",
                validate: emailInput => {
                    if (emailInput) {
                      return true;
                    } else {
                      console.log('Please enter a valid email.');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: 'Please enter school name.',
                name: 'school'
            }
        ])
            .then((employeeInfo) => {
                const addIntern = new Intern(
                    employeeInfo.name, 
                    employeeInfo.id, 
                    employeeInfo.email, 
                    employeeInfo.school
                );
                teamMembers.push(addIntern);
                    // console.log(addIntern)
                addNewEmployee();
            });
    };



 //CREATE HTML FUNCTION WITH ALL TEAM MEMBERS
    function createHtml() {

        const html = [];

        function mngrHtml(employee) {
            return `<div class="container-fluid p-1">
            <div class="col">
                <div class="row" id="team-cards">
                    <div class="card mb-3 mx-auto">
    
                        <div class="col-md-4 col-sm-6 col-lg-4 pt-4">
                            <div class="card">
                                <h5 class="card-title">
                                    ${employee.name}
                                </h5>
                                <h6 class="card-text">Manager</h6>
                            </div>
                            
                            <div class="card-body">
                                <p class="info">Employee ID: ${employee.id}</p>
                                <p class="info">Email Address: ${employee.email}</p>
                                <p class="info">Office: ${employee.officeNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        };

        function engrHtml(employee) {
            return `<div class="container-fluid p-1">
            <div class="col">
                <div class="row" id="team-cards">
                    <div class="card mb-3 mx-auto">
    
                        <div class="col-md-4 col-sm-6 col-lg-4 pt-4">
                            <div class="card">
                                <h5 class="card-title">
                                    ${employee.name}
                                </h5>
                                <h6 class="card-text">Engineer</h6>
                            </div>
                            
                            <div class="card-body">
                                <p class="info">Employee ID: ${employee.id}</p>
                                <p class="info">Email Address: ${employee.email}</p>
                                <p class="info">GitHub ${employee.gitHub}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        };
        
        function intHtml(employee) {
            return `<div class="container-fluid p-1">
            <div class="col">
                <div class="row" id="team-cards">
                    <div class="card mb-3 mx-auto">
    
                        <div class="col-md-4 col-sm-6 col-lg-4 pt-4">
                            <div class="card">
                                <h5 class="card-title">
                                    ${employee.name}
                                </h5>
                                <h6 class="card-text">Intern</h6>
                            </div>
                            
                            <div class="card-body">
                                <p class="info">Employee ID: ${employee.id}</p>
                                <p class="info">Email Address: ${employee.email}</p>
                                <p class="info">School: ${employee.school}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        };

        for (i = 0; i < teamMembers.length; i++) {
            let teamMember = teamMembers[i] 
            if (teamMember.getRole() === 'Manager') {
                html.push(mngrHtml(teamMember))
            } else if (teamMember.getRole() === 'Engineer') {
                html.push(engrHtml(teamMember))
            } else {
                html.push(intHtml(teamMember))
            }
        }; 
        return html.join(''); 
    };


function starterHtml (){
 return `<html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
     
     <title>Team Profile Generator</title>
 </head>
 <body>
     <nav class="navbar navbar-dark bg-primary mb-5">
         <div class="container-fluid">
             <span class="navbar-brand text-center w-100 h1 mt-6 fs-3 text">MVP Design Team</span>
         </div>
     </nav>
 
     <!-- START Team information -->
  
     ${createHtml()}    
 
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
 </body>
 </html>`
}


// FUNCTION TO KICKOFF APP
initApp();