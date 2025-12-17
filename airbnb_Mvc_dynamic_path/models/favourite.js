const fs = require("fs");
const path = require("path");

const rootDir = require("../util/filePath");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked as favourite");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (error, data) => {
      if (error) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }

  static deleteById(delHomeId, callback) {
    Favourite.getFavourites((homeIds) => {
      const updatedHomes = homeIds.filter((homeId) => homeId !== delHomeId);

      fs.writeFile(favouriteDataPath, JSON.stringify(updatedHomes), callback);
    });
  }
};
