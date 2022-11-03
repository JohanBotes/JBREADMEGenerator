const inquirer = require('inquirer')
const fs = require('fs')
const MarkDown = require("./library/ReadmeGen.js");
const { Server } = require('http');

const questions = (
  [
    /* Pass your questions in here */
    {
        type: "input",
        name: "projecttitle",
        message: "What is the Project Title?",
        default: "Professional automated README.MD Generator App",
        validate: function (answer) {
            if (answer.length < 10) {
                return console.log("....| The project title must have minimum 10 characters");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "projectdescription",
        message: "What does your Application do? Please provide a clear Project Description?",
        default: "Develop an App that automates the creation of a professional uniform best practice README.MD file for all future projects",
        validate: function (answer) {
          if (answer.length < 10) {
              return console.log(".... | A project description of 10 characters and more are required");
          }
          return true;
      }
    },
    {
        type: "input",
        name: "usage",
        message: "Write a short paragraph describing the PURPOSE of your project?",
        default: "The purpose of the App is to (1) Save time by not having to perform mundane tasks over and over, (2) Standardized the README.md file layouts, and to (3) Maintain a comprehensive complete list of questions to ensure completeness of the README.MD file",
        validate: function (answer) {
          if (answer.length < 10) {
              return console.log(".... | The project PURPOSE write-up requires 10 characters and more.");
          }
          return true;
      }
    },
    {
        type: "checkbox",
        name: "industry",
        message: "Which Industry(ies) will your application be best suited for?",
        choices: ["Finance", " Distribution", " Marketing", " Sales", " Software Development", " Banking", " Consulting", " Manufacturing", " Construction", " Service Management", " Aviation", " Healthcare", " Education", " Other"],  
        default: ["Software Development", " Consulting"],
    },
    {
        type: "checkbox",
        name: "technology",
        message: "What are the THREE (3) MAIN technologies, platforms and/or software required to complete the Project successfully?",
        choices: ["Node.js", " Express.js", " React.js", " GitHub", " VS Code", " Postman", " Insomnia", " JavaScript"],
        default: ["Node.js"],
    },
    {
        type: "input",
        name: "installation",
        message: "Provide the exact step-by-step installation instructions, chronology and further explanations?",
        default: "(1) Download the technology and/or software required into a new folder, (2) Install the software technology, (3) Run the app with the provided commands in VS Code using Node.js and Express.js",
        validate: function (answer) {
          if (answer.length < 10) {
              return console.log("A valid GitHub username is required.");
          }
          return true;
      }
    },
    {
      type: "list",
      name: "estimatedprojectduration",
      message: "What is the estimated Project duration from start to completion?",
      choices: ["Duration <= 1 month", "Duration <= 3 months", "Duration <= 6 months", "Duration <= 1 year", "Duration > 1 year"],
      default: "Duration <= 1 month"
    },
    {
      type: "list",
      name: "license",
      message: "License: Choose a license for your project.",
      default: "MIT",
      message: "Choose a license for your project.",
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributors names and their contribution details?",
      default: "Wynand Botes, Dane Edwards, and the rest of the team",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide clear concise instructions on 'How to conduct app testing', and the technologies to be deployed?",
      default: "Jest > User acceptance testing, default testing, and unit testing",
    },
    {
      type: "input",
      name: "questions",
      message: "Please list all questions you may have regarding the App?",
      default: "",
      validate: function (answer) {
        if (answer.length < 10) {
            return console.log("....| If you have no questions, please enter 'Not Applicable' - The answer must have minimum 10 characters");
        }
        return true;
    }
    },
    {
      type: "input",
      name: "contactemail",
      message: "As owner of the repository - What is your best contact e-mail address?",
      default: "johan.botes@udexx.com"
    },
    {
      type: "input",
      name: "contactcellphone",
      message: "As owner of the repository - What is your best cellphone contact number?",
      default: "+1 (217) 518-2138"
    },
    {
      type: "input",
      name: "contactfirstnamelastname",
      message: "Who is the owner of this App and/or Repository? (First name and Last name)",
      default: "Johan Botes"
    },
    {
      type: "input",
      name: "githubusername",
      message: "As owner of the repository - What is your GitHub Username?",
      default: "[JohanBotes](https://github.com/JohanBotes/)"
    },
  ])
    
  // run query function //

  function runQuery() {
    
    // Use user feedback for... whatever!!
    return inquirer.prompt(questions)
    .then((answers) => {

      const mark = MarkDown.generateReadme(answers)
      // const data = JSON.stringify(mark)

      console.log(answers)
      // console.log(mark)

      fs.writeFile("README.md", mark, function(err) {
        if (err) {
          console.log("Could not create and save README file as expected", err)
        } else {console.log("Success - the new README.md file was generated!")}
      })
    })
    
    .catch((error) => {console.log(error)
    })
    
  }
  
  runQuery()

  
