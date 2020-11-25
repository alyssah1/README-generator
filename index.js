// asking for things from user 
const inquirer = require("inquirer");
const fs = require("fs");

//questions for user to answer
inquirer.prompt([
    { 
       message: "What is your GitHub username?", 
       name: "userName",
       type: "input"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input"
    },
    {
        message: "What is your project's name?",
        name: "project",
        type: "input"
    },
    {
        message: "Please write a short description of your project",
        name: "projectInput",
        type: "input"
    },
    {
        message: "What kind of license should your project have?",
        name: "license",
        type: "list",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "None"]
    },
    {
        message: "What command should be run to install dependencies?",
        name: "npmInput",
        type: "default",
        default: "npm i"
    },
    {
        message: "What command should be run to run tests?",
        name: "npmTest",
        type: "default",
        default: "npm test"
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "useRepo",
        type: "input"
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "contributeRepo",
        type: "input"
    }
])
.then(function(answers) {
console.log(answers);
})

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
