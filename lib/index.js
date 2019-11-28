const fs = require("fs");

module.exports = function mdlinks (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (error, data) => {
      if (error) {
        error = "Não foi encontrado links no arquivo";
        reject(error);
      }
      else {
        let result = [];
        const dataArray = data.match(/\[(\S.*)\]\((http.*?\))/gm);
        dataArray.forEach((index) => {
          const title = index.match(/\[(.*)\]/)[1];
          const href = index.match(/\((http.*)\)/)[1];
          result.push(href + "/ " + title);
        });
        resolve(result);
      } 
    });
  });
};
