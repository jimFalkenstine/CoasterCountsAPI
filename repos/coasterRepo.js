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
    },
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
          if (err) {
            reject(err);
          }
          else {
            let coaster = JSON.parse(data).find(c => c.id == id);
            resolve(coaster);
          }
        });
    }

};
  
  module.exports = coasterRepo;