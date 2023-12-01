const express = require("express");
const { getUserByToken, updateUserByToken, getAllUserByRoleUser } = require("../controllers/user.controlller");

const route = express.Router();

route.get("/", getUserByToken);
route.get("/all", getAllUserByRoleUser);
route.put("/", updateUserByToken);

module.exports = route;
