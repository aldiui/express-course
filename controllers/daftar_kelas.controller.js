const { Transaksi, Kelas, User } = require("../models");

const getAllDaftarKelas = async (req, res) => {
    try {
        const { id } = req.payload;
        const dataUser = await User.findByPk(id);
        if (!dataUser) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        const dataKelas = await Transaksi.findAll({
            where: { id_user: id },
            include: [{ model: Kelas, as: "kelas" }],
        });

        res.status(200).json({
            status: 200,
            message: "Data daftar kelas",
            data: dataKelas.map((transaksi) => transaksi.kelas),
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

module.exports = { getAllDaftarKelas };
