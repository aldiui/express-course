"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Transaksis", {
            id: {
                allowNull: false,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_user: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            id_kelas: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            total: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            tanggal_pendaftaran: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            status: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: 0,
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
        await queryInterface.dropTable("Transaksis");
    },
};
