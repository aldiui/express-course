"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Kelas", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_kategori: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            nama_kelas: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            deskripsi: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            harga: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            nama_pengajar: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            detail_pengajar: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            durasi: {
                allowNull: false,
                type: Sequelize.TIME,
            },
            rating: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            gambar: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            video: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Kelas");
    },
};
