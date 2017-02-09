module.exports = function(sequelize, DataTypes) {
    return sequelize.define('delayed_jobs', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '0'
        },
        attempts: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '0'
        },
        handler: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        last_error: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        run_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        locked_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        failed_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        locked_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'delayed_jobs',
        underscored: true
    });
};
