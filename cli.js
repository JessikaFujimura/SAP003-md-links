#!/usr/bin/env node

const mdLinks = require("./lib/index.js");
const modpath = require("path");
const path = modpath.resolve(process.argv[2]);
const option = process.argv[3];

mdLinks(path, option)
  .then((result)=> result.forEach((i) => {
    if (option) {
      console.log(i.href + " / " + i.title + "/" + i.status );
    } else {
      console.log(i.href + " / " + i.title );
    };
  }))
  .catch((reject)=> console.error);

