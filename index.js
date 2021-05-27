// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamMembers = [];

// APPLICATION FUNCTION

    // Start of gathering teammember info
    function initApp() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'start',
                message: 'Hello fellow coder! Ready to put together your team profile??',
                validate: answer => {
                    if (answer) {
                        addTeammate()
                    } else {
                        console.log('Goodbye')
                        return false;
                    }
                } 
            },
            {
                type: 'list',
                message: 'Select an employee role from the list below:',
                choices: ['Manager', 'Engineer', 'Intern', 'Profile compete. No more team members to add!'],
                name: 'role'
            },
            {
                type:'input',
                message: 'Enter the employee name',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter the employee ID',
                name:'id'
            },
            {
                type: 'input',
                message: 'Please enter the employee email address',
                name: 'email'
            },

        ])
        .then ((employeeInfo) => {
            if(employeeInfo.role === 'Manager') {
                console.log('Add Manager');
                getManager()

            } else if (employeeInfo.role  === 'Engineer') {
                console.log('Add Engineer');
            } else if (employeeInfo.role  === 'Intern') {
                console.log('Add Intern');

            } else (employeeInfo.role  === 'Profile compete. No more team members to add!')

        });
    };

    //GET TEAM MEMBER DATA FUNCTION
 

    // GET MANAGER DATA FUNCTION
    function getManager() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your team manager\'s name?',
                name: 'name',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter your manager\'s name!');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                message: "Please enter your team manager's email.",
                name: "email"
            },
            {
                type: 'input',
                message: 'Please enter your team manager\'s office number?',
                name: 'officeNumber'
            }
        ])
            .then(empInfo => {
                const addManager = new Manager(
                    empInfo.name, 
                    empInfo.id, 
                    empInfo.email, 
                    empInfo.officeNumber
                );
                this.manager.push(addManager);
                    // console.log(addManager)
                addNewEmployee();
            });
    };

    //GET TEAM MEMBER DATA FUNCTION


    // ADD ENGINEER 

    // ADD INTERN



 //CREATE HTML FUNCTION WITH ALL TEAM MEMBERS
    // function createHtml() {
    //     const genHTML = 
    //     `<!DOCTYPE html>
    //     '
    // }



// FUNCTION TO KICKOFF APP
initApp();