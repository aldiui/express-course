const { Kategori } = require("../models");

const getAllKategori = async (req, res) => {
    try {
        const dataKategori = await Kategori.findAll();

        res.status(200).json({
            status: 200,
            message: "Data kategori",
            data: dataKategori,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const getKategoriById = async (req, res) => {
    try {
        const dataKategori = await Kategori.findByPk(req.params.id);
        if (!dataKategori) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Detail data kategori",
            data: dataKategori,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const createKategori = async (req, res) => {
    try {
        const { nama_kategori, deskripsi } = req.body;
        if (!nama_kategori || !deskripsi) {
            return res.status(400).json({
                status: 400,
                message: "Data harus diisi",
            });
        }

        const dataKategori = await Kategori.create({ nama_kategori, deskripsi });
        res.status(201).json({
            status: 201,
            message: "Kategori anda berhasil dibuat",
            data: dataKategori,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const updateKategori = async (req, res) => {
    try {
        const { nama_kategori, deskripsi } = req.body;
        if (!nama_kategori || !deskripsi) {
            return res.status(400).json({
                status: 400,
                message: "Data harus diisi",
            });
        }

        const dataKategori = await Kategori.findByPk(req.params.id);
        if (!dataKategori) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        await Kategori.update(
            { nama_kategori, deskripsi },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json({
            status: 200,
            message: "Kategori anda berhasil diubah",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const deleteKategori = async (req, res) => {
    try {
        const dataKategori = await Kategori.findByPk(req.params.id);
        if (!dataKategori) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        await Kategori.destroy({ where: { id: req.params.id } });
        res.status(200).json({
            status: 200,
            message: "Kategori anda berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

const deleteAllKategori = async (req, res) => {
    try {
        await Kategori.destroy();
        res.status(200).json({
            status: 200,
            message: "Kategori anda berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

module.exports = { getAllKategori, getKategoriById, createKategori, updateKategori, deleteKategori, deleteAllKategori };
