const fs = require('fs')

function loadFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

loadFile('./index.js')
    .then(loadFile('./test.js'))
    .then((data) => console.log(data))
    .catch((err) => console.log(`index load ${err}`))

// loadFile('./test.js')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(`test load ${err}`))
