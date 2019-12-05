#!/usr/bin/env node

const mdLinks = require("./lib/index.js");
const path = require("path");
const pathFile = path.resolve(process.argv[2]);
const option = process.argv[3];

mdLinks(pathFile, option)
  .then((result)=> result.forEach((i) => {
    if (option) {
      console.log(i.href, i.title, i.status );
    } else {
      console.log(i.href, i.title );
    };
  }))
  .catch((reject)=> console.log(reject));

