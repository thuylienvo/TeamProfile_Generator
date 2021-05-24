// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// APPLICATION FUNCTION

const initApp = () => {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is your ID?",
            validate: (number) => {
                if (typeof number === "number") {
                    return number;
                }
            }
        },
        {
            type: "text",
            name: "email",
            message: "What is your email address?",
        },
    ])
    .then((responses) => console.log(responses));
        console.log(new Employee(response.name, response.id, response.email));
 };


 // GET MANAGER DATA FUNCTION


 //GET TEAM MEMBER DATA FUNCTION


 // ADD ENGINEER 

 // ADD INTERN



 //CREATE HTML FUNCTION WITH ALL TEAM MEMBERS


// FUNCTION TO KICKOFF APP
initApp();