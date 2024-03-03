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
        console.log(req.body)
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

            res.status(201).json({ message: "User with this email already exists" });
        } else {
            console.error("Error registering user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
});


///for profile 
app.get("/api/user/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//


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


app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Login.findOne({ email });

        if (!user) {
            return res.status(200).json({ message: "nouser" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            return res.status(200).json({ message: "Login successful", user, });
        } else {
            return res.status(200).json({ message: "nouser" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(200).json({ message: "nouser" });
    }
});

app.listen(5000, () => {
    console.log("server running on port 5000");
});



app.put("/api/update-status/:id", async (req, res) => {
    try {
        const loginId = req.params.id;
        const { status } = req.body;
        const updatedLogin = await Login.findByIdAndUpdate(
            loginId,
            { $set: { status: status } },
            { new: true }
        );

        if (!updatedLogin) {
            return res.status(404).json({ message: "Login not found" });
        }

        res.status(200).json({ message: "Status updated successfully", updatedLogin });
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});