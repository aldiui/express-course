const express = require("express");
const { verifyToken } = require("../middleware/token");
const { registerUser, loginUser, logoutUser } = require("../controllers/auth.controller");

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/logout", verifyToken, logoutUser);

module.exports = route;
