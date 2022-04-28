const { userService } = require("../src/services/");
const { assert } = require("chai");
const { userModel } = require("../src/db/models");
const mongoose = require("mongoose");
describe("User Services", () => {
  before("MOngodb connection", () => {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
  });
  it("List of Users", async (done) => {
    const users = await userService.listUsers();
    done();
    assert.isArray(users);
  });

  it("list users has property", async () => {
    const users = await userService.listUsers();
    assert.property(users[0], "email");
    assert.property(users[0], "fname");
    assert.property(users[0], "lname");
    assert.property(users[0], "pNumber");
  });

  it("Add User", async () => {
    const user_data = {
      email: "test@test.com",
      fname: "test",
      lname: "test",
      pNumber: 8759654125,
    };
    const user = await userService.addUsersToList(user_data);
    assert.property(user, "email");
    assert.property(user, "fname");
    assert.property(user, "lname");
    assert.property(user, "pNumber");
    assert.property(user, "_id");
    userModel.remove({ _id: user._id });
  });
});
