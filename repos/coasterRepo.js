let fs = require('fs');

const FILE_NAME = './assets/coasters.json';

let coasterRepo = {
  get: function (resolve, reject) {
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
              (searchObject.name ? c.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0 : true));
        }

        resolve(coasters);
      }
    });
  },
  insert: function (newData, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        let coasters = JSON.parse(data);
        coasters.push(newData);
        fs.writeFile(FILE_NAME, JSON.stringify(coasters), function (err) {
          if (err) {
            reject(err);
          }
          else {
            resolve(newData);
          }
        });
      }
    });
  },
  update: function (newData, id, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        let coasters = JSON.parse(data);
        let coaster = coasters.find(c => c.id == id);
        if (coaster) {
          Object.assign(coaster, newData);
          fs.writeFile(FILE_NAME, JSON.stringify(coasters), function (err) {
            if (err) {
              reject(err);
            }
            else {
              resolve(newData);
            }
          });
        }
      }
    });
  },
  delete: function (id, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        let coasters = JSON.parse(data);
        let index = coasters.findIndex(c => c.id == id);
        if (index != -1) {
          coasters.splice(index, 1);
          fs.writeFile(FILE_NAME, JSON.stringify(coasters), function (err) {
            if (err) {
              reject(err);
            }
            else {
              resolve(index);
            }
          });
        }
      }
    });
  }

};

module.exports = coasterRepo;