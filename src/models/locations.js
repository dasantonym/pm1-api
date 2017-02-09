module.exports = function(sequelize, DataTypes) {
    return sequelize.define('locations', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'locations',
        underscored: true
    });
};
