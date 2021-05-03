const Comment = require("../models/commentModel");

exports.createComment = (req, res, next) => {
    const comment = new Comment({
        content: req.body.content,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    comment
        .save()
        .then(() => {
            res.status(201).json({
                message: "Comment Created (saved) successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getOneComment = (req, res, next) => {
    Comment.findOne({
            _id: req.params.id,
        })
        .then((comment) => {
            res.status(200).json(comment);
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });
};

exports.modifyComment = (req, res, next) => {
    const comment = new Comment({
        _id: req.params.id,
        content: req.body.content,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    Comment.updateOne({ _id: req.params.id }, comment)
        .then(() => {
            res.status(201).json({
                message: "Comment updated successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.deleteComment = (req, res, next) => {
    Comment.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: "Comment has been Deleted!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getAllComments = (req, res, next) => {
    Comment.find()
        .then((comments) => {
            res.status(200).json(comments);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};
