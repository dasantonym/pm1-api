module.exports = function(sequelize, DataTypes) {
    return sequelize.define('commands', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.TIME,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.TIME,
            allowNull: false
        },
        event_data: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'commands',
        underscored: true
    });
};
