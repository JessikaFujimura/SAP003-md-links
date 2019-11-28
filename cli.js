#!/usr/bin/env node

const mdLinks = require("./lib/index.js");
const commander = require("commander");

commander
  .command("md-links")
  .action(mdLinks()
    .then((result)=> console.log(result))
    .catch((reject)=> console.log(reject))
)

commander.parse(process.argv);
