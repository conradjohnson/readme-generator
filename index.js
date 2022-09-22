// Include packages needed for this application
//generateMarkdown
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');



// An array of questions for user input
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
        message: 'Contributors (leave blank if solo contributor): ',
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
    let readMeString = generateMarkdown(data);
    let fileDir = 'readme/';
    fileName = fileDir + fileName;
    // first clear out the old file
    fs.writeFile(fileName, '', function(){console.log('done')})
    
    //now let's write the new file
    fs.appendFile(fileName, readMeString, (err) =>
    // Ternary operator to log an error or success.
    err ? console.error(err) : console.log('Your README.md is ready in /readme directory!')
);

}

// // TODO: Create a function to initialize app
function init() {
    let greetString = `\x0AREADME.md generator\x0A===================\x0A\x0AWill auto-generate a README.md in 'readme' directory`;
    console.log(greetString);
    inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile('README.md', response)
    );

}

// // Function call to initialize app
init();
















