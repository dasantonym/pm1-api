module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tags', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        piece_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tag_type: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'normal'
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'tags',
        underscored: true
    });
};
