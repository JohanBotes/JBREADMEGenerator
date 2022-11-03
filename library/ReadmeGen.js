class MarkDown {

    static generateReadme(answers) {
        return `
# Project Title 
${answers.projecttitle} 
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

# Project Description
${answers.projectdescription}

## Table of Contents
* [Usage](#Usage)
* [Industry](#Industry)
* [Technology Stack](#Technology-Stack)
* [Installation](#Installation)
* [Estimated Project Duration](#Estimated-Project-Duration)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [Contact Name](#Contact-Name)

### Usage
${answers.usage}

### Industry
${answers.industry}

### Technology Stack
${answers.technologystack}

### Installation
${answers.installation}

### Estimated Project Duration
${answers.estimatedprojectduration}

### License
This repository is released under the ${answers.license} License. 
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

### Contributing
${answers.contributing}

### Tests
${answers.tests}

### Questions
${answers.questions}

You can also reach the repository owener (Conact name below) at the following: 
- E-mail: ${answers.contactemail} or
- Cellphone:  ${answers.contactcellphone} or 
- GitHub username:  ${answers.githubusername}

### Name of Repository Owner
${answers.contactfirstnamelastname}
    `
    }
}

module.exports = MarkDown

// There "MUST NOT" be an open line between "return (LINE) and the next line" - you must use the back "tick" to ID the full set as a string"
