const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/filePath");
const Favourite = require("./favourite");
const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
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
        // ✅ file missing or empty → safe fallback
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
      homes = homes.filter((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId,callback){
    Home.fetchAll(homes=>{
      homes=homes.filter(home=>home.id!==homeId);
      fs.writeFile(homeDataPath,JSON.stringify(homes),error={
        Favourite.deleteById(homeId,callback);
      })
    })
  }

};
