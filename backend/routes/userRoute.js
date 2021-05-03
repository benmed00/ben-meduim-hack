const express = require("express");

const router = express.Router();

const userCtrl = require("../controllers/userController");

router.get("/", userCtrl.getAllUsers);
router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.getOneUser);
router.put("/:id", userCtrl.modifyUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
