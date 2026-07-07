const express = require("express");
const mongoose = require("mongoose");
const app = express();
// Read form data
app.use(express.urlencoded({ extended: true }));
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/persondb")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});
// Schema
const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number
});
// Model
const Person = mongoose.model("Person", PersonSchema);
// Display HTML Form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// Insert Data
app.post("/add", async (req, res) => {
    const person = new Person({
        name: req.body.name,
        age: req.body.age
    });
    await person.save();
    res.send("Data Inserted Successfully");
});
// Display Data
app.get("/show", async (req, res) => {
    const data = await Person.find();
    res.send(data);
});
// Server
app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
