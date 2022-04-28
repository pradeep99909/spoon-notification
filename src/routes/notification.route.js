const express = require("express");
const router = express.Router();

const controller = require("../controller");

router
  .route("/email")
  .post(controller.notificationController.sendEmailNotification);

module.exports = router;
