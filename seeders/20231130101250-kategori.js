"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Kategoris", [
            {
                nama_kategori: "Kategori 1",
                deskripsi: "Description for Kategori 1",
            },
            {
                nama_kategori: "Kategori 2",
                deskripsi: "Description for Kategori 2",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Kategoris", null, {});
    },
};
