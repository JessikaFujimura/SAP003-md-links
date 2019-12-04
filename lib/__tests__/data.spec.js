const mdLinks = require("../index.js");

describe("mdLinks", () => {
  test("is a function", (done) => {
    expect(typeof mdLinks).toBe("function");
    done();
  });
  test("return mdLinks", (done) => {
    mdLinks("./lib/__tests__/Test.md")
      .then((result) => {
        expect(result).toEqual([{"href": "http://pt.wikipedia.org/wiki/Markdown", "title": "Markdown"}]);
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
