const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/filePath");
const Favourite = require("../models/favourite");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(id, houseName, price, location, rating, photoUrl) {
    this.id = id;
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((homes) => {
      homes.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(homes), (err) => {
        if (err) {
          console.log("Error writing file", err);
        }
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      if (err || data.length === 0) {
        return callback([]);
      }

      try {
        callback(JSON.parse(data));
      } catch (error) {
        console.log("JSON parse error, resetting file");
        callback([]);
      }
    });
  }

  static findById(homeId, callback) {
    Home.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    Home.fetchAll((homes) => {
      const updatedHomes = homes.filter((home) => home.id !== homeId);

      fs.writeFile(homeDataPath, JSON.stringify(updatedHomes), (error) => {
        if (!error) {
          Favourite.deleteById(homeId, callback);
        }
      });
    });
  }
};
