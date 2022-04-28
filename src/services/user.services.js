const { userModel } = require("../db/models");

const listUsers = async () => {
  return new Promise((resolve, reject) => {
    userModel.find({}, {}, (err, result) => {
      if (!err) return resolve(result);
      return reject(err);
    });
  });
};

const addUsersToList = async (data) => {
  return new Promise((resolve, reject) => {
    userModel.create(data, (err, result) => {
      if (!err) return resolve(result);
      return reject(err);
    });
  });
};

module.exports = {
  listUsers,
  addUsersToList,
};
