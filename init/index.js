const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = ({title, description, installation, usage, license, contribute, test, questions}) =>
`# ${title}

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

${questions}
`



inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }
  ])
  .then((answers) => {
    const readMe = generateReadMe(answers);

    fs.writeFile('README.md', readMe, (err) =>
      err ? console.log(err) : console.log('Successfully created README')
    );
  });