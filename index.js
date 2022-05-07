





// all packages needed for this application
const inquirer = require('inquirer'); 
const readmeTemplate = require ('./utils/readme-template');
const {writeFile} = require('./utils/generate-file');

// an array of questions for user input
const promptReadmeData = readmeData => {
    console.log(`
    =================
        ReadMe 
    =================
    `)
  
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your Project *',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please put the name of your project');
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'license',
            message: 'Select a license that was used *',
            choices: ['MIT', 'ISC', 'Apache 2.0', 'None'],
            validate: licenseInput => {
                if(licenseInput) {
                    return true;
                } else {
                    console.log('Please put the license of your project');
                    return false;
                }
            }
        },

        // table of contents 

        {
            type: 'input', 
            name: 'description',
            message: 'tell the reader about this application',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please give a brief description about this application');
                    return false;
                }
            }
        },

        {
            type: 'checkbox',
            name: 'languages',
            message: 'what was the application built with?',
            choices: [' JavaScript', ' HTML', ' CSS', ' ES6', ' jQuery', ' Bootstrap', ' Node', ' Next.js', ' React.js', ' Vue.js', ' Angular', ' Svelte', ' Laravel', ' Other']
        }, 

        {
            type: 'input',
            name: 'usage',
            message: 'What is the purpose of this application? *',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log("what is the use case for this application?");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'Installation',
            message: 'How do I install this application? (Write the command to install & use back ticks (``` command here ```)) *',
            validate: InstallationInput => {
                if(InstallationInput) {
                    return true;
                } else {
                    console.log("what is the use case for this application?");
                    return false;
                }
            }
        }, 

        {
            type: 'input',
            name: 'contact',
            message: 'How can the user reach you? *',
            validate: contactInput => {
                if(contactInput) {
                    return true;
                } else {
                    console.log("Please fill out the contact information.");
                    return false;
                }
            }
        }, 

        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub user name? *',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log("Please fill out your GitHub user name.");
                    return false;
                }
            }
        }, 

        {
            type: 'input',
            name: 'FAQ',
            message: 'Where can the user find the FAQs of this application? *',
            validate: FAQInput => {
                if(FAQInput) {
                    return true;
                } else {
                    console.log("Please fill out the FAQ");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'contribute',
            message: 'How can users contribute to this application? *',
            validate: contributeInput => {
                if(contributeInput) {
                    return true;
                } else {
                    console.log("Please fill out how the user can contribute to this application");
                    return false;
                }
            }
        }

    ]);
}

promptReadmeData()
.then(readmeData => {
    return readmeTemplate(readmeData)
})
.then(generateReadme => {
    console.log(generateReadme);
    return writeFile(generateReadme);
})
.catch(err => {
    console.log(err);
});

