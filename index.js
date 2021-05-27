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
                name:'id'
            },
            {
                type: 'input',
                message: 'Please manager\'s email.',
                name: "email"
            },
            {
                type: 'input',
                message: 'Please enter manager\'s office number.',
                name: 'officeNumber'
            }
        ])
            .then((employeeInfo) => {
                const addManager = new Manager(
                    employeeInfo.name, 
                    employeeInfo.id, 
                    employeeInfo.email, 
                    employeeInfo.officeNumber
                );
                teamMember.push(addManager);
                    // console.log(addManager)
                addNewEmployee();
            });
    };

    //GET TEAM MEMBER DATA FUNCTION
    function addNewEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Would you like to add more team members?',
                choices: ['Engineer', 'Intern', 'Profile complete. No more team members to add!'],
                name: 'role'
            },
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
                
            } else if (employeeInfo.role  === 'Intern ') {
                console.log('Add Intern');
                getIntern()

            } else (employeeInfo.role === 'Profile compete. No more team members to add!') 
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
                name:'id'
            },
            {
                type: 'input',
                message: 'Please enter engineer\'s email.',
                name: "email"
            },
            {
                type: 'input',
                message: 'Please enter engineer\'s gitHub.',
                name: 'gitHub'
            }
        ])
            .then((employeeInfo) => {
                const addEngineer = new Engineer(
                    employeeInfo.name, 
                    employeeInfo.id, 
                    employeeInfo.email, 
                    employeeInfo.gitHub
                );
                this.manager.push(addEngineer);
                    // console.log(addEngin)
                addNewEmployee();
            });
    };

    // ADD INTERN
    // function getIntern() {
    //     inquirer.prompt([
    //         {
    //             type: 'input',
    //             message: 'What is the manager\'s name?',
    //             name: 'name',
    //             validate: nameInput => {
    //                 if (nameInput) {
    //                   return true;
    //                 } else {
    //                   console.log('Please enter manager\'s name!');
    //                   return false;
    //                 }
    //               }
    //         },
    //         {
    //             type: 'input',
    //             message: 'Enter manager ID:',
    //             name:'id'
    //         },
    //         {
    //             type: 'input',
    //             message: 'Please manager\'s email.',
    //             name: "email"
    //         },
    //         {
    //             type: 'input',
    //             message: 'Please enter manager\'s office number.',
    //             name: 'officeNumber'
    //         }
    //     ])
    //         .then((employeeInfo) => {
    //             const addManager = new Manager(
    //                 employeeInfo.name, 
    //                 employeeInfo.id, 
    //                 employeeInfo.email, 
    //                 employeeInfo.officeNumber
    //             );
    //             this.manager.push(addManager);
    //                 // console.log(addManager)
    //             addNewEmployee();
    //         });
    // };


 //CREATE HTML FUNCTION WITH ALL TEAM MEMBERS
    // function createHtml() {
    //     const genHTML = 
    //     `<!DOCTYPE html>
    //     '
    // }



// FUNCTION TO KICKOFF APP
initApp();