# Book Management API

This project provides a custom API server to manage books, built using Node.js, Express, and MongoDB.

## API Endpoints

| Method | Endpoint | Function |
|--------|----------|----------|
| GET | `/api/books` | List all books |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

## Setup

1. Clone repo
2. Create `.env` with:
    MONGO_URI=your-mongo-url
    PORT=5000
3. Install dependencies: `npm install`
4. Run server: `node app.js`

## Frontend (Optional)

- Open `frontend/index.html` in your browser to use the web interface.

## Sample curl Test

```bash
curl -X GET http://localhost:5000/api/books
