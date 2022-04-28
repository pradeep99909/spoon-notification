const { notificationService } = require("../services");
const { Response } = require("./response.controller");

const sendEmailNotification = async (req, res) => {
  try {
    if (req.body.code != "nopass") {
      return Response({ error: "Wrong Password" }, res, 200);
    }
    const data = await notificationService.sendEmail();
    return Response({ data: data }, res, 200);
  } catch (err) {
    return Response({ error: err }, res, 400);
  }
};

module.exports = {
  sendEmailNotification,
};
