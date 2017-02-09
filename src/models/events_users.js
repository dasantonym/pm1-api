module.exports = function(sequelize, DataTypes) {
    return sequelize.define('events_users', {
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'events_users',
        underscored: true
    });
};
