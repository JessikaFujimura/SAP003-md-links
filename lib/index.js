const fs = require("fs");
const fetch = require("node-fetch");
let result;

module.exports = function mdlinks(file, option) {
  return new Promise((resolve, reject) => { 
    fs.readFile(file, "utf8", (error, data) => {
      if (error) {
        reject(error.message);
      }
      if (data) {
        const dataArray = data.match(/\[(\S.*?)\]\((http.*?\))/gm);
        result = dataArray.map((index) => {
          const href = index.match(/\((http.*)\)/)[1];
          const title = index.match(/\[(.*)\]/)[1];
          return { title, href };
        });
        if (option) {
          const promise = result.map((i) => {
            return fetch(i.href)
              .then((res) => i.status = res.status);
          });
          Promise.all(promise).then(() => resolve(result));
        } else {
          resolve(result);
        }
      }});
  });
};

