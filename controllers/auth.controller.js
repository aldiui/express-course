const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { nama, email, password, konfirmasi_password } = req.body;
        if (!nama || !email || !password || !konfirmasi_password) {
            return res.status(400).json({
                status: 400,
                message: "Data harus diisi",
            });
        }

        const checkEmail = await User.findOne({ where: { email } });
        if (checkEmail) {
            return res.status(400).json({
                status: 400,
                message: "Maaf Email anda sudah terdaftar",
            });
        }

        if (password !== konfirmasi_password) {
            return res.status(400).json({
                status: 400,
                message: "Password dan Konfirmasi Password tidak cocok",
            });
        }

        const hashPassword = bcrypt.hashSync(password, 10);

        const register = await User.create({ nama, email, password: hashPassword });
        res.status(201).json({
            status: 201,
            message: "Registrasi anda berhasil",
            data: register,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal selama registrasi",
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                message: "Data harus diisi",
            });
        }

        const checkEmail = await User.findOne({ where: { email } });
        if (!checkEmail) {
            return res.status(400).json({
                status: 400,
                message: "Maaf Email anda tidak terdaftar",
            });
        }

        const matchPassword = bcrypt.compareSync(req.body.password, checkEmail.password);
        if (!matchPassword) {
            return res.status(400).json({
                status: 400,
                message: "Maaf Password anda salah",
            });
        }

        const accessToken = jwt.sign({ id: checkEmail.id, role: checkEmail.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).json({
            status: 200,
            message: "Login anda berhasil",
            data: checkEmail,
            token: accessToken,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal selama login",
        });
    }
};

const logoutUser = (req, res) => {
    try {
        const { id, role } = req.payload;
        const invalidatedToken = jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1s" });

        return res.status(200).json({
            status: 200,
            message: "Logout anda berhasil",
            invalidatedToken: invalidatedToken,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: "Kesalahan server internal selama logout",
        });
    }
};

module.exports = { registerUser, loginUser, logoutUser };
