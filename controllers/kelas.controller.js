const { Kelas } = require("../models");

const getAllKelas = async (req, res) => {
    try {
        const dataKelas = await Kelas.findAll();

        res.status(200).json({
            status: 200,
            message: "Data kelas",
            data: dataKelas,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const getKelasById = async (req, res) => {
    try {
        const dataKelas = await Kelas.findByPk(req.params.id);
        if (!dataKelas) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Detail data kelas",
            data: dataKelas,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const createKelas = async (req, res) => {
    try {
        const { id_kategori, nama_kelas, deskripsi, harga, nama_pengajar, detail_pengajar, durasi, rating, gambar, video } = req.body;
        if (!id_kategori || !nama_kelas || !deskripsi || !harga || !nama_pengajar || !detail_pengajar || !durasi || !rating || !gambar || !video) {
            return res.status(400).json({
                status: 400,
                message: "Data harus diisi",
            });
        }

        const dataKelas = await Kelas.create({ id_kategori, nama_kelas, deskripsi, harga, nama_pengajar, detail_pengajar, durasi, rating, gambar, video });
        res.status(201).json({
            status: 201,
            message: "Kelas anda berhasil dibuat",
            data: dataKelas,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const updateKelas = async (req, res) => {
    try {
        const { id_kategori, nama_kelas, deskripsi, harga, nama_pengajar, detail_pengajar, durasi, rating, gambar, video } = req.body;
        if (!id_kategori || !nama_kelas || !deskripsi || !harga || !nama_pengajar || !detail_pengajar || !durasi || !rating || !gambar || !video) {
            return res.status(400).json({
                status: 400,
                message: "Data harus diisi",
            });
        }

        const dataKelas = await Kelas.findByPk(req.params.id);
        if (!dataKelas) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        await Kelas.update(
            { id_kategori, nama_kelas, deskripsi, harga, nama_pengajar, detail_pengajar, durasi, rating, gambar, video },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json({
            status: 200,
            message: "Kelas anda berhasil diubah",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const deleteKelas = async (req, res) => {
    try {
        const dataKelas = await Kelas.findByPk(req.params.id);
        if (!dataKelas) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        await Kelas.destroy({ where: { id: req.params.id } });
        res.status(200).json({
            status: 200,
            message: "Kelas anda berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const deleteAllKelas = async (req, res) => {
    try {
        await Kelas.destroy();
        res.status(200).json({
            status: 200,
            message: "Kelas anda berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

module.exports = { getAllKelas, getKelasById, createKelas, updateKelas, deleteKelas, deleteAllKelas };
