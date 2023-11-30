const { Transaksi } = require("../models");

const getAllTransaksi = async (req, res) => {
    try {
        const { id, role } = req.payload;
        let dataTransaksi;
        if (role == 0) {
            dataTransaksi = await Transaksi.findAll({ where: { id_user: id } });
        } else {
            dataTransaksi = await Transaksi.findAll();
        }

        res.status(200).json({
            status: 200,
            message: "Data transaksi",
            data: dataTransaksi,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const getTransaksiById = async (req, res) => {
    try {
        const { id, role } = req.payload;
        let dataTransaksi;
        if (role == 0) {
            dataTransaksi = await Transaksi.findOne({ where: { id: req.params.id, id_user: id } });
        } else {
            dataTransaksi = await Transaksi.findByPk(req.params.id);
        }

        if (!dataTransaksi) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Detail data transaksi",
            data: dataTransaksi,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const createTransaksi = async (req, res) => {
    try {
        const { id } = req.payload;
        const { id_kelas } = req.body;
        if (!id_kelas) {
            return res.status(400).json({
                status: 400,
                message: "Data harus diisi",
            });
        }

        const dataKelas = await Kelas.findByPk(id_kelas);
        if (!dataKelas) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        const dataTransaksi = await Transaksi.create({ id_user: id, id_kelas, total: dataKelas.harga });

        res.status(201).json({
            status: 201,
            message: "Transaksi anda berhasil dibuat",
            data: dataTransaksi,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const updateTransaksi = async (req, res) => {
    try {
        const dataTransaksi = await Transaksi.findByPk(req.params.id);
        if (!dataTransaksi) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        await Transaksi.update(
            { tanggal_transaksi: new Date(), status: 1 },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json({
            status: 200,
            message: "Transaksi anda berhasil diubah",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const deleteTransaksi = async (req, res) => {
    try {
        const dataTransaksi = await Transaksi.findByPk(req.params.id);
        if (!dataTransaksi) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        await Transaksi.destroy({ where: { id: req.params.id } });
        res.status(200).json({
            status: 200,
            message: "Transaksi anda berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const deleteAllTransaksi = async (req, res) => {
    try {
        await Transaksi.destroy();
        res.status(200).json({
            status: 200,
            message: "Transaksi anda berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

module.exports = { getAllTransaksi, getTransaksiById, createTransaksi, updateTransaksi, deleteTransaksi, deleteAllTransaksi };
