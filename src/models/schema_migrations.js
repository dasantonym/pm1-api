module.exports = function(sequelize, DataTypes) {
    return sequelize.define('schema_migrations', {
        version: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    }, {
        tableName: 'schema_migrations',
        underscored: true
    });
};
