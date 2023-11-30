const express = require("express");
const userRoutes = require("./user.route");
const kategoriRoutes = require("./ketegori.route");
const authRoutes = require("./auth.route");
const kelasRoutes = require("./kelas.route");
const transaksiRoutes = require("./transaksi.route");
const daftarKelasRoutes = require("./daftar_kelas.route");
const { verifyToken } = require("../middleware/token");

const route = express.Router();
route.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Selamat Datang di api backend",
    });
});
route.use("/", authRoutes);
route.use("/user", verifyToken, userRoutes);
route.use("/kategori", verifyToken, kategoriRoutes);
route.use("/kelas", verifyToken, kelasRoutes);
route.use("/transaksi", verifyToken, transaksiRoutes);
route.use("/daftar-kelas", verifyToken, daftarKelasRoutes);

module.exports = route;
