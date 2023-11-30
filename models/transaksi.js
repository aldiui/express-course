"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Transaksi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Transaksi.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
            Transaksi.belongsTo(models.Kelas, { foreignKey: "id_kelas", as: "kelas" });
        }
    }
    Transaksi.init(
        {
            id_user: DataTypes.INTEGER,
            id_kelas: DataTypes.INTEGER,
            total: DataTypes.INTEGER,
            tanggal_pendaftaran: DataTypes.DATE,
            status: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "Transaksi",
        }
    );
    return Transaksi;
};
