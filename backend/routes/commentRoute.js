const express = require("express");

const router = express.Router();

const commentCtrl = require("../controllers/commentController");

router.get("/", commentCtrl.getAllComments);
router.post("/", commentCtrl.createComment);
router.get("/:id", commentCtrl.getOneComment);
router.put("/:id", commentCtrl.modifyComment);
router.delete("/:id", commentCtrl.deleteComment);

module.exports = router;
