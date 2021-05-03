const Reaction = require("../models/reactionModel");

exports.createReaction = (req, res, next) => {
    const reaction = new Reaction({
        type: req.body.type,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    reaction
        .save()
        .then(() => {
            res.status(201).json({
                message: "Reaction Created (saved) successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getOneReaction = (req, res, next) => {
    Reaction.findOne({
            _id: req.params.id,
        })
        .then((reaction) => {
            res.status(200).json(reaction);
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });
};

exports.modifyReaction = (req, res, next) => {
    const reaction = new Reaction({
        _id: req.params.id,
        type: req.body.type,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    Reaction.updateOne({ _id: req.params.id }, reaction)
        .then(() => {
            res.status(201).json({
                message: "Reaction updated successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.deleteReaction = (req, res, next) => {
    Reaction.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: "Reaction has been Deleted!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getAllReactions = (req, res, next) => {
    Reaction.find()
        .then((reactions) => {
            res.status(200).json(reactions);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};
