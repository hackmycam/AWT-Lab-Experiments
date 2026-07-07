const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/loginDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));
// Schema
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
// Model
const User = mongoose.model("User", UserSchema);
// Create Sample User
app.get("/createuser", async (req, res) => {
    const existingUser = await User.findOne({
        username: "admin"
    });
    if (existingUser) {
        return res.send("User already exists");
    }
    const user = new User({
        username: "admin",
        password: "1234"
    });
    await user.save();
    res.send("User Created Successfully");
});
// Login API
app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username: username,
        password: password
    });
    if (user) {
        res.json({
            success: true,
            message: "Login Success"
        });
    }
    else {
        res.json({
            success: false,
            message: "Login Failed"
        });
    }
});
// Start Server
app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
