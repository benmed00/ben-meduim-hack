const express = require("express");

const router = express.Router();

const tagCtrl = require("../controllers/tagController");

router.get("/", tagCtrl.getAllTags);
router.post("/", tagCtrl.createTag);
router.get("/:id", tagCtrl.getOneTag);
router.put("/:id", tagCtrl.modifyTag);
router.delete("/:id", tagCtrl.deleteTag);

module.exports = router;
