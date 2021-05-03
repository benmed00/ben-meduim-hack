const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config.json");


// Create new User
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: req.body.role,
            createdAt: new Date(),
            updatedAt: null,
        });
        user
            .save()
            .then(() => {
                res.status(201).json({
                    message: "User added successfully!",
                });
            })
            .catch((error) => {
                res.status(500).json({
                    error: error,
                });
            });
    });
};

// manage the login process
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error("User not found!"),
                });
            }
            bcrypt
                .compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error("Incorrect password!"),
                        });
                    }
                    const token = jwt.sign({ userId: user._id }, secret, {
                        expiresIn: "24h",
                    });
                    res.status(200).json({
                        userId: user._id,
                        token: token,
                    });
                })
                .catch((error) => {
                    res.status(500).json({
                        error: error,
                    });
                });
        })
        .catch((error) => {
            res.status(500).json({
                error: error,
            });
        });
};
