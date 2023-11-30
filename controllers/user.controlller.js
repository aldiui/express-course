const { User } = require("../models");

const getUserByToken = async (req, res) => {
    try {
        const { id } = req.payload;
        const dataUser = await User.findByPk(id);
        if (!dataUser) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Data user",
            data: dataUser,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal selama ambil data user",
        });
    }
};

const updateUserByToken = async (req, res) => {
    try {
        const { id } = req.payload;
        const { nama, password_lama, password_baru } = req.body;
        if (!nama) {
            return res.status(400).json({
                status: 400,
                message: "Data harus diisi",
            });
        }

        const dataUser = await User.findByPk(id);
        if (!dataUser) {
            return res.status(400).json({
                status: 400,
                message: "Data tidak ditemukan",
            });
        }

        let password = dataUser.password;

        if (password_lama && password_baru) {
            const matchPassword = bcrypt.compareSync(password_lama, dataUser.password);
            if (!matchPassword) {
                return res.status(400).json({
                    status: 400,
                    message: "Maaf Password anda salah",
                });
            }

            password = bcrypt.hashSync(password_baru, 10);
        }

        await User.update(
            { nama, password },
            {
                where: {
                    id,
                },
            }
        );
        res.status(200).json({
            status: 200,
            message: "User berhasil diubah",
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal",
        });
    }
};

module.exports = { getUserByToken, updateUserByToken };
