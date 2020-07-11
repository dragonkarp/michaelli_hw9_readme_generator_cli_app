const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs")
const util = require("util")

//const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        message: "What is the title of your project?",
        name:"project",
        type:"input"
    },
    {
        message: "Describe your project.",
        name:"description",
        type:"input"
    },
    {
        message: "What are the installation steps?",
        name:"installation",
        type:"input"
    },
    {
        message: "Describe how to use the app.",
        name:"usage",
        type:"input"
    },
    {
        message: "What is the license?",
        name:"license",
        type:"input"
    },
    {
        message: "Who is contributing to this project?",
        name:"contributors",
        type:"input"
    },
    {
        message: "How do you test the project?",
        name:"testing",
        type:"input"
    },
    {
        message: "What is your email for github",
        name:"email",
        type:"input"
    },
    {
        message: "Provide a link to your profile picture.",
        name:"photo",
        type:"input"
    }
]

function writeToFile(answers) {
    const actualRM = generateMarkdown(answers)
    fs.writeFile("README.md", actualRM, "utf-8", err => {
        if (err) {
            throw err
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        writeToFile(answer)
    })
}

init()