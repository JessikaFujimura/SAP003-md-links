const mdLinks = require("./lib/index.js")

mdLinks()
  .then((result)=> console.log(result))
  .catch((reject)=> console.log(reject))
