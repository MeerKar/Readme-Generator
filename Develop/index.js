// TODO: Include packages needed for this application
// require modules
const inquirer = require("inquirer");
const fs = require("fs");
// linking to page where the README is developed
const generatePage = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a short description of your project:",
    },
    {
      type: "input",
      name: "install",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this project?",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license does your project have?",
      choices: ["MIT", "GNU GPLv3", "Apache 2.0", "None"],
    },
    {
      type: "input",
      name: "contributors",
      message: "How can others contribute to your project?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username:",
    },
    {
      type: "input",
      name: "name",
      message: "Enter your full name for the credits section:",
    },
  ])
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile("generateMarkdown", readmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully generated Readme!")
    );
  });

// Function to write README file

// Function call to initialize app
// init();
