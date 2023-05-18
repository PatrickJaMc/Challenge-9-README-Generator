const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = ({title, description, installation, usage, license, contribute, test, github, email}) =>
`# ${title}

## ![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

${description}

## Table Of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Test](#test)
* [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contribute

${contribute}

## Test

${test}

## Questions
For questions please contact me via:

### GitHub: ${github}
### Email: ${email}
`



inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give your project a description'
  },
  {
      type: 'input',
      name: 'installation',
      message: 'What is needed for installation?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Give brief description on app usage'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Select app usage license',
    choices: ['MIT', 'Apache', 'Proprietary']
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Give contribution instructions'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Give brief explanation on how to test app'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Provide your GitHub User Name'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your email'
  }

  ])
  .then((answers) => {
    const readMe = generateReadMe(answers);

    fs.writeFile('README.md', readMe, (err) =>
      err ? console.log(err) : console.log('Successfully created README')
    );
  });