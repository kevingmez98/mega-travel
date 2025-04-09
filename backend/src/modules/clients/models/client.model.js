/* Modelo del cliente */
import DataTypes from "sequelize";
import sequelize from "../../../config/database.js";

const Client = sequelize.define('Client', {
  idClient: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true, // Declara que es autoincremental
    field: 'id_client'
  },
  fullName: { // nombre completo
    type: DataTypes.STRING,
    allowNull: false,
    field: 'full_name'
  },
  email: { // Email del cliente
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'email'
  },
  address: { // Dirección del cliente
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'address'
  },

}, {
  tableName: 'clients',
  freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
  timestamps: true,
  createdAt: 'created_at',   // mapea los nombres personalizados
  updatedAt: 'updated_at'
});

export default Client;