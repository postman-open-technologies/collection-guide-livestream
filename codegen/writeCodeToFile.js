// Save SDK code to file
const fs = require('fs');

module.exports = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./codegen/${fileName}.js`, data, (err) => {
            if(err) {
                return reject(err);
            }
            resolve(true);
        }); 
    });
}