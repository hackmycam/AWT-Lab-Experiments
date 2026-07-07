# Experiment 7: RESTful API with Express.js

Build a REST API for library book management with GET, POST, PUT, DELETE operations.

## Requirements
- Node.js (v18+)
- npm

## Setup & Install
```bash
npm install
```

## Dependencies
- express

## How to Run
```bash
node server.js
```
Server starts on `http://localhost:3000`

## API Endpoints
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a single book |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Testing
Use Thunder Client, Postman, or the included `client.html` to test the API.
