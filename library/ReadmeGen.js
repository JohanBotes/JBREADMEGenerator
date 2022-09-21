class MarkDown {
    static generateReadme (answers) {
        return 
        `
        # Title 
        ${answers.firstname},

        # Main section
        ${answers.lastname}

        ## Table of Contents
        - [Cellphone number](#Cellphone number)
        - [E Mail](#e Mail address)
        - [User Bio](#User Bio)

        ## Cellphone Number
        ${answers.cellphone}

        `
    }
}

module.exports = MarkDown