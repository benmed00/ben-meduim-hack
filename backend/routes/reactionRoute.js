const express = require("express");

const router = express.Router();

const reactionCtrl = require("../controllers/reactionController");

router.get("/", reactionCtrl.getAllReactions);
router.post("/", reactionCtrl.createReaction);
router.get("/:id", reactionCtrl.getOneReaction);
router.put("/:id", reactionCtrl.modifyReaction);
router.delete("/:id", reactionCtrl.deleteReaction);

module.exports = router;
