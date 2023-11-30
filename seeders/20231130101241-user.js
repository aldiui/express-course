"use strict";

const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                nama: "admin",
                email: "admin@gmail.com",
                password: bcrypt.hashSync("123", 10),
                role: 1,
            },
            {
                nama: "riva",
                email: "riva@gmail.com",
                password: bcrypt.hashSync("123", 10),
                role: 0,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
