const mdLinks = require("../index.js");

describe("mdLinks", () => {
  test("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  test("return title and url", (done) => {
    mdLinks("./lib/__tests__/Test.md")
      .then((result) => {
        expect(result).toEqual([{"href": "http://pt.wikipedia.org/wiki/Markdown", "title": "Markdown"}]);
        done();
      });
  });
  test("return title, url and status", (done) => {
    mdLinks("./lib/__tests__/Test.md", "true")
      .then((result) => {
        expect(result).toEqual([{"href": "http://pt.wikipedia.org/wiki/Markdown", "title": "Markdown", "status": 200}]);
        done();
      });
  });
  test("error test", (done) => {
    mdLinks("./anything.md")
      .catch((error) => {
        expect(error).toEqual("ENOENT: no such file or directory, open './anything.md'");
        done();
      });
  });
});
