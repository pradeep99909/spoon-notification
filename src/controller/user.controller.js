const { userService } = require("../services");
const { Response } = require("./response.controller");
const listUsers = async (req, res) => {
  const data = await userService.listUsers();
  return Response(data, res, 200);
};

const addUsersToList = async (req, res) => {
  try {
    console.log("addUsersToList :: req.body", req.body);
    if (
      !req.body.pNumber ||
      !req.body.email ||
      !req.body.fname ||
      !req.body.lname
    ) {
      return Response({ error: "Parameter Missing" }, res, 400);
    }
    const data = await userService.addUsersToList(req.body);
    return Response({ data: data }, res, 200);
  } catch (err) {
    return Response({ error: err }, res, 400);
  }
};

module.exports = {
  listUsers,
  addUsersToList,
};
