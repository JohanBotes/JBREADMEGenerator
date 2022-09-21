const inquirer = require('inquirer')
const fs = require('fs')
const MarkDown = require("./library/ReadmeGen.js")

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
    }
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
        } else {console.log("Success - you new README.md file was generated!")}
      })
    })
    
    .catch((error) => {console.log(error)
    })
    
  }
  
  runQuery()

  
