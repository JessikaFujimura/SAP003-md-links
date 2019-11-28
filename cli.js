#!/usr/bin/env node

const mdLinks = require("./lib/index.js");
const path = process.argv[2];

mdLinks(path)
  .then((result)=> result.forEach((i) => console.log(i)))
  .catch((reject)=> console.log(reject));