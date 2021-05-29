# TeamProfile_Generator

## Description

  When creating a project/application, it is important to have a high-quality team profile. This means it will include the what, where, why and how of your project. 

  * What is the app for   
  * Why was it created   
  * How to install and use it  
  * How to report issues  
  * How to make contributions  

  This is a command-line application that runs on `Node.js` and dynamically creates a professional team file from the data the user inputs. 

  ![teamprofile-demoGif](TBD)

   See the full demonstation here: [TEAM PROFILE Full Video](https://youtu.be/xQl8blAhm6k)

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  To generate a team profile, first run `npm install` the required dependencies as specified in package.json:

  `npm init`   
  `npm install inquirer`   
  `npm install --save-dev jest`

  The application can be invoked with node index.js.

  ## Usage 
  When you run `node index.js` in your terminal, the app uses the inquirer package to prompt the user with a series of questions about your team members. 

  Once all the questions have been answered, the data is collected and your HTML file will be created with `fs.writeFile`.  
  
  There you have it! A team prodile without the need to draw up an html outside of the command-line.

  View a sample TEAMPROFILE.html file generate with the application [here](https://github.com/thuylienvo/TeamProfile_Generator/blob/main/dist/team.html). 

  ## License  

  This repo is licensed under the MIT License. (https://opensource.org/licenses/MIT) 

  ## Questions
  For any questions, connect with me at [mimzy414@gmail.com](mailto:mimzy414@gmail.com). 
  
  GitHub: [thuylienvo](https://github.com/thuylienvo) 


