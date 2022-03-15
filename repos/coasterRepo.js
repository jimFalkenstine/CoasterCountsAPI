let fs = require('fs');

const FILE_NAME = './assets/coasters.json';

let coasterRepo = {
    get: function(resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    }
};
  
  module.exports = coasterRepo;