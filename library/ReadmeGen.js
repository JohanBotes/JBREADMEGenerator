class MarkDown {

    static generateReadme(answers) {
        return `
# Title 
${answers.name1}

# Main section
${answers.name2}

## Table of Contents
* [Cellphone-number](#Cellphone-number)

### Cellphone Number
${answers.cellphone}   
    `
    }
}

module.exports = MarkDown