const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("../routes/bookRoutes");

const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/bookdb-test-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe("API Test: /api/books", () => {
  let bookId;

  it("POST /api/books - should create a book", async () => {
    const res = await request(app).post("/api/books").send({
      title: "Test Book",
      author: "API Tester",
      year: 2024,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe("Test Book");
    bookId = res.body._id;
  });

  it("GET /api/books - should return all books", async () => {
    const res = await request(app).get("/api/books");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("PUT /api/books/:id - should update a book", async () => {
    const res = await request(app).put(`/api/books/${bookId}`).send({
      title: "Updated Title",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toBe("Updated Title");
  });

  it("DELETE /api/books/:id - should delete a book", async () => {
    const res = await request(app).delete(`/api/books/${bookId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("Deleted successfully");
  });
});
