const fs = require('fs');
const inquirer = require('inquirer');

// create file
inquirer
  .prompt([

    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a detailed description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the necessary steps to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please explain how to use your project in detail.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license.',
        choices: ['MIT License', 'GNU GPLv3'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'List any/all contributors and resources that helped in development.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests did you perform to measure the performance of your project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    
  ])
  .then(function(response) {

    let {title, description, installation, usage, license, contributing, tests, github, email} = response;

    let chosenLicense;
    let licenseAlt;
    let licenseImg;

    if (license === 'MIT License') {

        chosenLicense = `MIT License\n\nCopyright &copy; 2022 ${title}`;
        licenseAlt = 'MIT License';
        licenseImg = 'https://img.shields.io/badge/license-MIT-green'

    } else {

        chosenLicense = `GNU GENERAL PUBLIC LICENSE\n\nVersion 3, 29 June 2007`
        licenseAlt = 'GNU GPLv3';
        licenseImg = 'https://img.shields.io/badge/license-GPL-blue'

    }

    let readmeMarkdown =
    
`# ${title} &nbsp; ![${licenseAlt}](${licenseImg})
    
## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${chosenLicense}

## Contributing

${contributing}

## Tests

${tests}

## Questions

[${github} on GitHub](https://github.com/${github}) &nbsp; | &nbsp; [${email}](mailto:${email})`

    fs.writeFile('SAMPLE.md', readmeMarkdown, function(error) {
        if (error) {console.error(error)};
    });

    });