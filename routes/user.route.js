const express = require("express");
const { getUserByToken, updateUserByToken } = require("../controllers/user.controlller");

const route = express.Router();

route.get("/", getUserByToken);
route.put("/", updateUserByToken);

module.exports = route;
