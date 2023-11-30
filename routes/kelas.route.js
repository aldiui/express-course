const express = require("express");
const { getAllKelas, createKelas, getKelasById, updateKelas, deleteKelas, deleteAllKelas } = require("../controllers/kelas.controller");
const { verifyRoleAdmin } = require("../middleware/token");

const route = express.Router();

route.post("/", verifyRoleAdmin, createKelas);
route.get("/", getAllKelas);
route.get("/:id", getKelasById);
route.put("/:id", verifyRoleAdmin, updateKelas);
route.delete("/:id", verifyRoleAdmin, deleteKelas);
route.delete("/", verifyRoleAdmin, deleteAllKelas);

module.exports = route;
