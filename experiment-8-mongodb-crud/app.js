const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/college')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

// Schema
const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Model
const Student = mongoose.model('Student', StudentSchema);

// CRUD Operations
async function performCRUD() {
    try {
        // CREATE
        await Student.insertMany([
            { name: "Rahul", age: 24, course: "MCA" },
            { name: "Anu", age: 22, course: "MBA" },
            { name: "Kiran", age: 23, course: "MSc" }
        ]);
        console.log("Student Saved");

        // READ
        const students = await Student.find();
        console.log("Students:");
        console.log(students);

        // UPDATE
        await Student.updateOne(
            { name: "Rahul" },
            { $set: { age: 25 } }
        );
        console.log("Student Updated");

        // DELETE
        await Student.deleteOne({ name: "Rahul" });
        console.log("Student Deleted");

        mongoose.connection.close();

    } catch(err) {
        console.log(err);
    }
}

performCRUD();
