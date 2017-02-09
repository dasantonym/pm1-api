module.exports = function(sequelize, DataTypes) {
    return sequelize.define('events_tags', {
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'events_tags',
        underscored: true
    });
};
