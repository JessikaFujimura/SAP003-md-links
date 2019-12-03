const fs = require("fs");
//const fetch = require("node-fetch");
let result = [];

function mdlinks (file, option) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (error, data) => {
      if (error) {
        reject(error.message);
        console.log(error.message)
      }
      else {
        const dataArray = data.match(/\[(\S.*?)\]\((http.*?\))/gm);
        if (option == "--validate") {
          dataArray.forEach((index) => {
            const href = index.match(/\((http.*)\)/)[1];
            const title = index.match(/\[(.*)\]/)[1];
            result.push({title, href})});
        }
        resolve(result);
      }
    });
  });
};


/* const status = (result) => { 
  fetch(href)
  .then((response) => {
    const status = response.status;
} */

module.exports = mdlinks;