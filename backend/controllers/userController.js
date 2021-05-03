const User = require("../models/userModel");

// equivalent to SIGN-UP
exports.createUser = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    user
        .save()
        .then(() => {
            res.status(201).json({
                message: "User Created (saved) successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getOneUser = (req, res, next) => {
    User.findOne({
            _id: req.params.id,
        })
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });
};

exports.modifyUser = (req, res, next) => {
    const user = new User({
        _id: req.params.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    User.updateOne({ _id: req.params.id }, user)
        .then(() => {
            res.status(201).json({
                message: "User updated successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: "User has been Deleted!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};
