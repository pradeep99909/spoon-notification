const express = require("express");
const router = express.Router();

const notificationRoutes = require("./notification.route");
const userRoutes = require("./user.route");

router.use("/notification", notificationRoutes);
router.use("/user", userRoutes);

module.exports = router;
