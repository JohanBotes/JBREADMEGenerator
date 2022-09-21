const inquirer = require('inquirer');
const fs = require("fs")
const MarkDown = require("./library/ReadmeGen")

const questions = (
  [
    /* Pass your questions in here */
    {
        type: "input",
        name: "name1",
        message: "What is your first name?",
        default: ""
    },
    {
        type: "input",
        name: "name2",
        message: "What is your last name?",
        default: ""
    },
    {
        type: "input",
        name: "cellphone",
        message: "What is your cellphone number?",
        default: ""
    },
    {
      type: "input",
      name: "user_email",
      message: "What is your user e-mail address?",
      default: ""
    },
    {
      type: 'input',
      name: 'userbio',
      message: 'Please write a short bio or maximum 450 characters.',
      default: ""
    },
  ])
    
  // run query function //

  function runQuery() {
    
    // Use user feedback for... whatever!!
    return inquirer.prompt(questions)
    .then((answers) => {
    
      const mark = MarkDown.generateReadme(answers)
      fs.writeFile("README.md", mark, function(err) {
        if (err) {
          console.log("Could not create and save README file as expected", err)
        } else {console.log("Success")}
      })
    })
    
    .catch((error) => {console.log(error)
    })
    
  }
  
  runQuery()

  
