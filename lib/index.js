const fs = require("fs");
const file = process.argv[2];

module.exports = function mdlinks () {
  return new Promise((resolve, reject) => {
    fs.readFile("./README.md", "utf8", function(error, data) {
      let result = [];
      const dataArray = data.match(/\[(\S.*)\]\((http.*?\))/gm);
      if (dataArray !== null) {
        dataArray.forEach((index) => {
          const title = index.match(/\[(.*)\]/)[1];
          const href = index.match(/\((http.*)\)/)[1];
          result.push({href, title});
        });
        resolve(result);
      } else {
        error = "Não foi encontrado links no arquivo ";
        reject(error);
      }
    });
  });
};
