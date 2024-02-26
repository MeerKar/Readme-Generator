// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateMarkdown = (data) => {
  return `# ${data.title}
![Github licence](http://img.shields.io/badge/license-${encodeURIComponent(
    data.license
  )}-blue.svg)

  
  ## Description 
  ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Github](#github)
* [Credits](#credit)
  
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is license under ${data.license}

  
  ## Tests
  ${data.test}

  ## Github

Github link at https://github.com/${data.github}

 ## Credits
  ${data.name}
`;
};

// use for importing Markdown in index
module.exports = generateMarkdown;
