// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'readmeTitle',
        message: 'What is the title of your project? (Required)',
        validate: readmeTitleInput => {
            if (readmeTitleInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'readmeDescription',
        message: 'Briefly describe your project (Required)',
        validate: readmeDescriptionInput => {
            if (readmeDescriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'readmeInstall',
        message: 'Enter the project installation instructions:',
    },
    {
        type: 'input',
        name: 'readmeUsage',
        message: 'Enter the project usage instructions:',
    },
    {
        type: 'list',
        name: 'readmeLicense',
        message: 'Choose a license:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'readmeContribute',
        message: 'Enter any information for project contribution:',
    },
    {
        type: 'input',
        name: 'readmeTest',
        message: 'Enter project test information if applicable:',
    },
    {
        type: 'input',
        name: 'readmeGitHub',
        message: 'Enter your GitHub username (Required)',
        validate: readmeGitHubInput => {
            if (readmeGitHubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'readmeEmail',
        message: 'Enter your contact email address (Required)',
        validate: readmeEmailInput => {
            if (readmeEmailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
            }
    }
];


// Create a function to write README file
function writeToFile(data) {
    fs.writeFile(
        './GeneratedREADME/README.md',
        data,
        (err) => {
            if (err) throw err;
            console.log('The README.md file has been created. Check it out in the GeneratedREADME folder!')
        });
};

async function getUserInput() {
    let response = await inquirer.prompt(questions);
    if (response) {
        if(response.readmeLicense === 'GNU AGPLv3'){
            response.licenseInfo = 'https://choosealicense.com/licenses/agpl-3.0/';
            response.badgeInfo ='![GNU AGPLv3 License Information](https://img.shields.io/badge/License-GNU%20AGPLv3-blue)';
        };
        if(response.readmeLicense === 'GNU GPLv3'){
            response.licenseInfo = 'https://choosealicense.com/licenses/gpl-3.0/';
            response.badgeInfo ='![GNU GPLv3 License Information](https://img.shields.io/badge/License-GNU%20GPLv3-blue)';
        };
        if(response.readmeLicense === 'GNU LGPLv3'){
            response.licenseInfo = 'https://choosealicense.com/licenses/lgpl-3.0/';
            response.badgeInfo ='![GNU LGPLv3 License Information](https://img.shields.io/badge/License-GNU%20LGPLv3-blue)';
        };
        if(response.readmeLicense === 'Mozilla Public License 2.0'){
            response.licenseInfo = 'https://choosealicense.com/licenses/mpl-2.0/';
            response.badgeInfo ='![Mozilla Public License 2.0 Information](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-blue)';
        };
        if(response.readmeLicense === 'Apache License 2.0'){
            response.licenseInfo = 'https://choosealicense.com/licenses/apache-2.0/';
            response.badgeInfo ='![Apache License 2.0 Information](https://img.shields.io/badge/License-Apache%20License%202.0-blue)';
        };
        if(response.readmeLicense === 'MIT License'){
            response.licenseInfo = 'https://choosealicense.com/licenses/mit/';
            response.badgeInfo ='![MIT License Information](https://img.shields.io/badge/License-MIT%20License-blue)';
        };
        if(response.readmeLicense === 'Boost Software License 1.0'){
            response.licenseInfo = 'https://choosealicense.com/licenses/bsl-1.0/';
            response.badgeInfo ='![Boost Software License 1.0 Information](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-blue)';
        };
        if(response.readmeLicense === 'The Unlicense'){
            response.licenseInfo = 'https://choosealicense.com/licenses/unlicense/';
            response.badgeInfo ='![The Unlicense License Information](https://img.shields.io/badge/License-The%20Unlicense-blue)';
        };
        writeToFile(generate(response));
    }
};


// Create a function to initialize app
function init() {
    getUserInput();
    };


// Function call to initialize app
init();
