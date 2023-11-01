const { DataTypes } = require("sequelize");

const CandidateModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  document: {
    type: DataTypes.STRING,
    allowNull: false
  },
}  

module.exports = {
  initialize: (sequelize) => {
    this.model = sequelize.define("candidate", CandidateModel);
  },

  createCandidate: (candidate) => {
    return this.model.create(candidate);
  },

  findAllCandidates: (query) => {
    return this.model.findAll({
      where: query
    });
  },
}
