const mockingoose = require("mockingoose");
const Book = require("../models/Book");

describe("Unit Test: Book Model", () => {
  it("should return a book by mocking the DB", async () => {
    const _doc = { _id: "1", title: "Mocked", author: "Test", year: 2023 };

    mockingoose(Book).toReturn(_doc, "findOne");
    const result = await Book.findOne({ title: "Mocked" });

    expect(result.title).toBe("Mocked");
  });
});
