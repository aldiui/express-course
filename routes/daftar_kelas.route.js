const express = require("express");
const { getAllDaftarKelas } = require("../controllers/daftar_kelas.controller");
const { verifyRoleUser } = require("../middleware/token");

const route = express.Router();

route.get("/", verifyRoleUser, getAllDaftarKelas);
module.exports = route;
