const express = require("express");

const router = express.Router();

const articleCtrl = require("../controllers/articleController");

const authorize = require("../middleware/roleMiddleware");


router.get("/", articleCtrl.getAllArticles);
router.post("/", authorize(), articleCtrl.createArticle);
router.get("/:id", authorize(), articleCtrl.getOneArticle);
router.put("/:id", authorize(), articleCtrl.modifyArticle);
router.delete("/:id", authorize(), articleCtrl.deleteArticle);

module.exports = router;
