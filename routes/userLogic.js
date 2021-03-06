const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Contact = require("../models/contactModel");
const bodyParser = require('body-parser');
const { jwtKey } = require("../config/keys");
const auth = require("../middlewares/auth");

module.exports = (app) => {
    app.post('/api/signup', async (req, res) => {
        const { email, password } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    msg: "Email already exists"
                });
            }
            user = new User({
                email,
                password
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = { user: { id: user.id } };

            jwt.sign(
                payload,
                keys.jwtKey, {
                expiresIn: 10000
            },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error not saved");
        }
    }
    );

    app.post("/api/login", async (req, res) => {

        const { email, password } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (!user)
                return res.status(400).json({
                    message: "User Not Exist"
                });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password!"
                });

            const payload = { user: { id: user.id } };
            jwt.sign(payload, jwtKey, { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }
    );

    app.get("/api/me", auth, async (req, res) => {
        try {
            // request.user is getting fetched from Middleware after token authentication
            const user = await User.findById(req.user.id);
            res.json(user.id);
        } catch (e) {
            res.send({ message: "Error in Fetching user" });
        }
    });

    app.post("/api/contact", async (req, res) => {
        const { name, email, message } = req.body;

        try {
            let contact = await Contact.find({ email });
            let contactData = new Contact({
                name,
                email,
                message,
            });
            console.log(contact);
                console.log("Saveing..")
                await contactData.save();
                res.send({message: "Success"})
/*             if(contact < 4){
                console.log("not saving");
                res.status(400).json({ message: "you´ve sent too many times in short time"});
            } */
        }
        catch (e) {
            console.log("error")
            res.status(500).json({
                message: "Server Error"
            });
        }
    });

}