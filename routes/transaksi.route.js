const express = require("express");
const { getAllTransaksi, createTransaksi, getTransaksiById, updateTransaksi, deleteTransaksi, deleteAllTransaksi } = require("../controllers/transaksi.controller");
const { verifyRoleAdmin, verifyRoleUser } = require("../middleware/token");

const route = express.Router();

route.post("/", verifyRoleUser, createTransaksi);
route.get("/", getAllTransaksi);
route.get("/:id", getTransaksiById);
route.put("/:id", verifyRoleAdmin, updateTransaksi);
route.delete("/:id", verifyRoleAdmin, deleteTransaksi);
route.delete("/", verifyRoleAdmin, deleteAllTransaksi);

module.exports = route;
