const mongoose = require("mongoose");
const Book = require("../models/Book");

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/bookdb-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe("Integration Test: DB Operations", () => {
  it("should insert a book into the database", async () => {
    const book = new Book({ title: "1984", author: "Orwell", year: 1949 });
    const savedBook = await book.save();

    expect(savedBook.title).toBe("1984");
  });
});
