module.exports = function(sequelize, DataTypes) {
    return sequelize.define('events', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        happened_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        dur: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        event_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        video_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        piece_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        locked: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'none'
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'normal'
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        modified_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        performers: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        created_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        highlighted: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        inherits_title: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '0'
        },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'events',
        underscored: true
    });
};
