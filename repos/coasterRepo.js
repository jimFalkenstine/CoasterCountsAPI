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
    },
    search: function (searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
          if (err) {
            reject(err);
          }
          else {
            let coasters = JSON.parse(data);
            // Perform search
            if (searchObject) {
              coasters = coasters.filter(
                c => (searchObject.id ? c.id == searchObject.id : true) &&
                  (searchObject.name ? c.name.toLowerCase().indexOf(searchObject.name) >= 0 : true));
            }
    
            resolve(coasters);
          }
        });
      }

    

};
  
  module.exports = coasterRepo;