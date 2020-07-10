//const generateMarkdown = require("./generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs")

const questions = [
    "Give your README a badge.",
    "What is the title of your project?",
    "Describe your project.",
    "List the table of contents. Hit enter with every entry.",
    "What are the installation steps?",
    "Describe how to use the app.",
    "What is the license?",
    "Who is contributing to this project?",
    "How do you test the project?",
    "QUESTIONS??"
]

const [badge, name, description, contents, installation, 
       usage, license, contributors, tests, ques] = questions

// function writeToFile(fileName, data) {

// }

function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "badge",
            message: badge
        },
        {
            type: "input",
            name: "name",
            message: name
        },
        {
            type: "input",
            name: "description",
            message: description
        },
        {
            type: "input",
            name: "contents",
            message: contents
        },
        {
            type: "input",
            name: "installation",
            message: installation
        },
        {
            type: "input",
            name: "usage",
            message: usage
        },
        {
            type: "input",
            name: "license",
            message: license
        },
        {
            type: "input",
            name: "contributors",
            message: contributors
        },
        {
            type: "input",
            name: "tests",
            message: tests
        },
        {
            type: "input",
            name: "ques",
            message: ques
        }
    ])
}

init()
