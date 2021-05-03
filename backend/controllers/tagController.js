const Tag = require("../models/tagModel");

exports.createTag = (req, res, next) => {
    const tag = new Tag({
        title: req.body.title,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    tag
        .save()
        .then(() => {
            res.status(201).json({
                message: "Tag Created (saved) successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getOneTag = (req, res, next) => {
    Tag.findOne({
            _id: req.params.id,
        })
        .then((tag) => {
            res.status(200).json(tag);
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });
};

exports.modifyTag = (req, res, next) => {
    const tag = new Tag({
        _id: req.params.id,
        title: req.body.title,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    Tag.updateOne({ _id: req.params.id }, tag)
        .then(() => {
            res.status(201).json({
                message: "Tag updated successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.deleteTag = (req, res, next) => {
    Tag.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: "Tag has been Deleted!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getAllTags = (req, res, next) => {
    Tag.find()
        .then((tags) => {
            res.status(200).json(tags);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};
