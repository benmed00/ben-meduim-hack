const Article = require("../models/articleModel");

exports.createArticle = (req, res, next) => {
    const article = new Article({
        name: req.body.name,
        reference: req.body.reference,
        content: req.body.content,
        draft: req.body.draft,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    article
        .save()
        .then(() => {
            res.status(201).json({
                message: "Article Created (saved) successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getOneArticle = (req, res, next) => {
    Article.findOne({
            _id: req.params.id,
        })
        .then((article) => {
            res.status(200).json(article);
        })
        .catch((error) => {
            res.status(404).json({
                error: error,
            });
        });
};

exports.modifyArticle = (req, res, next) => {
    const article = new Article({
        _id: req.params.id,
        name: req.body.name,
        reference: req.body.reference,
        content: req.body.content,
        draft: req.body.draft,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
    });
    Article.updateOne({ _id: req.params.id }, article)
        .then(() => {
            res.status(201).json({
                message: "Article updated successfully!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.deleteArticle = (req, res, next) => {
    Article.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: "Article has been Deleted!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};

exports.getAllArticles = (req, res, next) => {
    Article.find()
        .then((articles) => {
            res.status(200).json(articles);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        });
};
