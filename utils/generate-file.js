



const fs = require('fs');

const writeFile = readmeContent => {

    

    return new Promise ((resolve, reject) => {
        fs.writeFile('./readme.md', readmeContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'readme generated'
            });
        });
    });
};

module.exports = {writeFile};