const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//dbconnection

const mongodbUrl = "mongodb://localhost:27017/ShopKartApp";
mongoose
    .connect(mongodbUrl)
    .then(() => { console.log("Connected to MongoDB"); })
    .catch((error) => { console.error("Error connecting to MongoDB:", error); });

const Login = require('./model/loginmodel');
const User = require('./model/usermodel');



app.post("/api/userreg", async (req, res) => {
    try {
        const { fullname, email, phone, password, confirmPassword } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const login = new Login({
            email: email,
            password: hashedPassword,
            userType: "user",
            status: "authorized",
        });
        await login.save();
        const user = new User({
            _id: login._id,
            fullname: fullname,
            email: email,
            phonenumber: phone,
        });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate email error
            res.status(400).json({ message: "User with this email already exists" });
        } else {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
});


//----------------------------------------------------------------
app.get("/api/allusers", async (req, res) => {
    try {
        const allUsers = await User.find().populate('_id');
        res.status(200).json(allUsers);
    } catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



app.listen(5000, () => {
    console.log("server running on port 5000");
});