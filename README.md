# Md-links

## 1. Prefácio

O md-links é um módulo executável no [Node.js](https://nodejs.org/) que lê arquivos de [Markdown](http://pt.wikipedia.org/wiki/Markdown)(.md) e extrai urls com protocolo http e https e seus respectivos titulos. 

## 2. Instalação

Para a instalação deste módulo é nessário ter instalado o [Node.js](https://nodejs.org/pt-br/) em seu computador. 

Com o node instalado, digite em seu terminal: 

$ npm install -g JessikaFujimura/SAP003-md-links

## 3.  Como utilizar

Para utilizar esta aplicação você pode inserir em seu terminal os s

```js
$node

const mdLinks = require("md-links");

mdLinks("/some/example.md")
  .then(links => {
    // => [{ href, text, status }]
  })
  .catch(console.error);
```

Este módulo também pode ser utilizado através da Command Line Interface (CLI). 
Para utilizar este módulo por CLI, digite no terminal os seguintes comandos: 

`$ md-links <path-do-file.md>`

#### Exemplo

```js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```