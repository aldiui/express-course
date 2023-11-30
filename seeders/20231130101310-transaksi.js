"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Transaksis", [
            {
                id_user: 2,
                id_kelas: 1,
                total: 30000,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Transaksis", null, {});
    },
};
