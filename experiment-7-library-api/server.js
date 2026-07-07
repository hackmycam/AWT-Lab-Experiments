const express = require('express');
const app = express();


app.use(express.json());

// Sample Book Data
let books = [
    {
        id: 1,
        title: "Java Programming",
        author: "James Gosling"
    },
    {
        id: 2,
        title: "Python Basics",
        author: "Guido van Rossum"
    }
];

// GET All Books (read all books)
app.get('/books', (req, res) => {
    res.json(books);
});

// GET Single Book
app.get('/books/:id', (req, res) => {
    const book = books.find(
        b => b.id == parseInt(req.params.id)
    );

    if (!book)
        return res.status(404).json({
            message: "Book not found"
        });

    res.json(book);
});

// POST New Book
app.post('/books', (req, res) => {

    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book Added",
        book: newBook
    });
});

// PUT Update Book
app.put('/books/:id', (req, res) => {

    const book = books.find(
        b => b.id == parseInt(req.params.id));

    if (!book)
        return res.status(404).json({
            message: "Book not found"
        });

    book.title = req.body.title;
    book.author = req.body.author;

    res.json({
        message: "Book Updated",
        book
    });
});

// DELETE Book
app.delete('/books/:id', (req, res) => {

    books = books.filter(
        b => b.id != parseInt(req.params.id)
    );

    res.json({
        message: "Book Deleted"
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
