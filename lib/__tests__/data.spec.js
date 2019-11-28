const mdLinks = require("../index.js");

describe("mdLinks", () => {
  test("is a function", (done) => {
    expect(typeof mdLinks).toBe("function");
    done();
  });
  test("return mdLinks", (done) => {
    mdLinks("./Test.md")
      .then((result) => {
        expect(result).toEqual(["http://pt.wikipedia.org/wiki/Markdown/ Markdown"]);
        done();
      });
  });
  test("error test", (done) => {
    mdLinks("./anything.md")
      .catch((error) => {
        expect(error).toEqual("Não foi encontrado links no arquivo");
        done();
      });
  });
});
