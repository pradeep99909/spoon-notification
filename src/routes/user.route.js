const express = require("express");
const router = express.Router();

const controller = require("../controller");

router.route("/list").get(controller.userController.listUsers);

router.route("/add").post(controller.userController.addUsersToList);

module.exports = router;
