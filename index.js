// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Who made this README ?",
        name: "by",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project ?",
    },
    {
        type: "input",
        message: "Enter your project desciption ?",
        name: "description",        
    },
    {
        type: "input",
        message: "Enter the command line to install necessary dependencies",
        name: "dependencies",
    },
    {
        type: "list",
        choices: ["ENG", "SPN",],
        name: "dependencies",
    },
    {
        type: "input",
        message: "Provide an example of usage",
        name: "usage",
    },
    {
        type: "input",
        message: "provide input about contributing",
        name: "contributors",
    },
    {
        type: "input",
        message: "provide information about running test",
        name: "test",
    },
    {
        type: "list", 
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
        name: "license",
    },
    {
        type: "input",
        message: "enter github username",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email adress",
        name: "email"
    },
    {
        type: "input",
        message: "List some cool features abpout this project here",
        name: "features",
    }

];

 // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

  // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("README.md", generateMarkdown({ ...responses }));
    });
  }

  // Function call to initialize app
init();
