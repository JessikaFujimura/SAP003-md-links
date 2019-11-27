const fs = require("fs");

function mdlinks () {
  return new Promise((resolve, reject) => {
    fs.readFile("./README.md", "utf8", function(error, data) {
      if (data) {
        let array = [];
        const file = data.match(/\[(\S.*)\]\((http.*\)?)/gm);
        file.forEach((index) => {
          const title = index.match(/\[(.*)\]/)[1];
          const href = index.match(/\((http.*)\)/)[1];
          array.push({href, title});
        });
        console.log(array)
        resolve(array);
      } else {
        reject(error);
      }
    });
  });
};

mdlinks();

module.exports = mdlinks;