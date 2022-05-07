



// this checks to see what license the user put 
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'ISC') {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    } else if (license === 'Apache 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else {
      return '';
    }
}

// information from the index.js file 
const readmeContent = (readmeContentInfo) => {
    return readmeContentInfo; 
} 

module.exports = readmeTemplateLayout => {
    const {
        name, 
        languages,
        description, 
        Installation, 
        usage,
        contact, 
        username,
        license, 
        FAQ, 
        contribute} = readmeTemplateLayout

    return `
# **${readmeContent(name)}**

${renderLicenseBadge(license)}

## **Table of contents**
- [Description](#Description)
- [Languages](#Languages)
- [Usage](#Usage)
- [Installation](#Installation)
- [Contact Information](#Contact)
- [FAQ](#FAQ)
- [How to contribute](#How-to-contribute)

## **Description**
${readmeContent(description)}

## **Languages**
- ${readmeContent(languages)} 


## **License**
This project is licensed under: ${readmeContent(license)}

## **Usage**
${readmeContent(usage)}

## **Installation**

How to install: 
${readmeContent(Installation)}

## **Contact**

#### GitHub profile
[${readmeContent(username)}](https://github.com/${readmeContent(username)})

#### Reach Out
${(readmeContent(contact))}

## **FAQ**
${(readmeContent(FAQ))}

## **How-to-contribute**
Submit issues with your code to the repository and I'll be sure to check them out 
${(readmeContent(contribute))}
    `;
}

renderLicenseBadge()