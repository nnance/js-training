const fs = require('fs');

function readPromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err,data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        });
    });
};

readPromise('package.json')
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err))
