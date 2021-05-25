// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// const teamMembers = [];

// APPLICATION FUNCTION

    // WELCOME MESSAGE
    function initApp() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'start',
                message: 'Hello fellow coder! Ready to put together your team profile??',
                default: false
            }
        ]) 
    };
        getManager();

    // GET MANAGER DATA FUNCTION
    function getManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your team manager's name?",
                name: "name"
            },
            {
                type: "input",
                message: "Please enter your team manager's email.",
                name: "email"
            },
            {
                type: "input",
                message: "Please enter your team manager's office number?",
                name: "officeNumber"
            },
        ])

            // addTeamMembers();
    }
        

    //GET TEAM MEMBER DATA FUNCTION


    // ADD ENGINEER 

    // ADD INTERN



 //CREATE HTML FUNCTION WITH ALL TEAM MEMBERS


// FUNCTION TO KICKOFF APP
initApp();