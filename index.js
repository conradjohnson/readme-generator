// Include packages needed for this application
//generateMarkdown
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');



// An array of questions for user input to pass to inquirer object
const questions = [
    {
        type: 'input',
        message: 'Developer First and Last Name: ',
        name: 'userFirstLast',
    },
    {
        type: 'input',
        message: 'Github Username: ',
        name: 'gitUser',
    },
    {
        type: 'input',
        message: 'Developer Email: ',
        name: 'email',
    },
    {
      type: 'input',
      message: 'Project Title: ',
      name: 'projTitle',
    },
    {
      type: 'input',
      message: 'Project Description: ',
      name: 'projDesc',
    },
    {
        type: 'input',
        message: 'Repository Name: ',
        name: 'repoName',
    },
    {
      type: 'input',
      message: 'Installation Instructions: ',
      name: 'installInst',
    },
    {
        type: 'input',
        message: 'Usage Instructions: ',
        name: 'usageInst',
    },
    {
        type: 'input',
        message: `Contributors Git Usernames (separate by comma: , ): `,
        name: 'contributors',
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Which Software License?',
        choices: [
            {value: 'MIT', name: "MIT"},
            {value: 'GAGPL', name: "GNU AGPLv3"},
            {value: 'GGPL', name: "GNU GPLv3"},
            {value: 'MOZ', name: "Mozilla v2"},
            {value: 'APA', name: "Apache v2"},
            {value: 'ISC', name: "Internet Systems Consortium (ISC)"},
            {value: 'UNL', name: "The Unlicense"},
            {value: 'NO', name: "None"}
          ]
        ,
    },
    {
        type: 'input',
        message: 'Test Instructions: ',
        name: 'testInst',
    }


  ];

// a function to write README file
function writeToFile(fileName, data) {
    
    // generate the readme file string
    let readMeString = generateMarkdown(data);

    // set the directory to store files
    let fileDir = 'readme/';

    // set the filename string with directory prepended
    fileName = fileDir + fileName;

    // first clear out the old file
    fs.writeFile(fileName, '', ()=>{})
    
    //now let's write the new file
    fs.appendFile(fileName, readMeString, (err) =>
     // Ternary operator to log an error or success.
    err ? console.error(err) : console.log('\x0A\x0AYour README.md is ready in /readme directory!\x0A\x0A')
    );

}

// A function to initialize app 
function init() {
    let greetString = `\x0AREADME.md generator\x0A===================\x0A\x0AWill auto-generate a README.md in 'readme' directory`;
    console.log(greetString);
    inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile('README.md', response)
    );

}

// Function call to initialize app
init();
















