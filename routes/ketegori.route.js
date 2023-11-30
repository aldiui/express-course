const express = require("express");
const { getAllKategori, createKategori, getKategoriById, updateKategori, deleteKategori, deleteAllKategori } = require("../controllers/kategori.controller");
const { verifyRoleAdmin } = require("../middleware/token");

const route = express.Router();

route.post("/", verifyRoleAdmin, createKategori);
route.get("/", getAllKategori);
route.get("/:id", getKategoriById);
route.put("/:id", verifyRoleAdmin, updateKategori);
route.delete("/:id", verifyRoleAdmin, deleteKategori);
route.delete("/", verifyRoleAdmin, deleteAllKategori);

module.exports = route;
