const API = "http://localhost:5000/api/books";

async function loadBooks() {
  const res = await fetch(API);
  const books = await res.json();
  document.getElementById("bookList").innerHTML = books.map(b => `<li>${b.title} by ${b.author}</li>`).join("");
}

document.getElementById("bookForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = parseInt(document.getElementById("year").value);

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, author, year }),
  });

  loadBooks();
});

loadBooks();
