# Md-links

## 1. Prefácio

O md-links é um módulo executável no [Node.js](https://nodejs.org/) que lê arquivos de [Markdown](http://pt.wikipedia.org/wiki/Markdown)(.md) e extrai urls com protocolo http e https e seus respectivos titulos. Há também a opção de validadar as urls. 

## 2. Instalação

Para a instalação deste módulo é nessário ter instalado o [Node.js](https://nodejs.org/pt-br/) em seu computador. 

Com o node instalado, digite em seu terminal: 

```
$ npm install -g JessikaFujimura/SAP003-md-links
```
Para verificar se foi instalado o módulo, veja se surgiu no arquivo package.json como dependência o "md-links".

`
"dependencies": {
"md-links": "github:JessikaFujimura/SAP003-md-links",
}
`

## 3. Como utilizar

Para utilizar esta aplicação você pode inserir em seu terminal os seguintes comandos:

```js
$node

const mdLinks = require("md-links");

mdLinks("/some/example.md")
  .then(links => {
    // => [{ href, title }]
  })
  .catch(console.error);
```

#### Exemplo

```js
const mdLinks = require("md-links");

mdLinks("./README.md")
  .then(console.log)
  .catch(console.error);
```
Retornado:

```js
`Promise {
  <pending>,
  domain:
   Domain {
     domain: null,
     _events:
      [Object: null prototype] {
        removeListener: [Function: updateExceptionCapture],
        newListener: [Function: updateExceptionCapture],
        error: [Function: debugDomainError] },
     _eventsCount: 3,
     _maxListeners: undefined,
     members: [],
     [Symbol(kWeak)]: WeakReference {} } }`
> [ { title: 'Node.js', href: 'https://nodejs.org/' },
  { title: 'Markdown', href: 'http://pt.wikipedia.org/wiki/Markdown' },
  { title: 'Node.js', href: 'https://nodejs.org/pt-br/' } ]
```
## 4. Como utilizar pelo CLI

Este módulo também pode ser utilizado através da Command Line Interface (CLI). 
Para utilizar este módulo por CLI, digite no terminal os seguintes comandos: 

```js
$ md-links <path-do-file.md>
url / title
url / title
...
```

#### Exemplo

```js
$ md-links README.md
https://nodejs.org/ / Node.js
http://pt.wikipedia.org/wiki/Markdown / Markdown
https://nodejs.org/pt-br/ / Node.js
```

## 5. Validação das urls

Para validar as url, é necessário inserir um terceiro argumento, após o caminho do arquivo. 

Pelo Node:

```js
$node

const mdLinks = require("md-links");

mdLinks("/some/example.md", "true")
  .then(links => {
    // => [{ href, title, status }]
  })
  .catch(console.error);
```

Pelo CLI: 
```js
$ md-links <path-do-file.md> <true>
url / title / status
url / title / status
...
```