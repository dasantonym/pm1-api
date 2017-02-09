module.exports = function(sequelize, DataTypes) {
    return sequelize.define('pieces', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        modified_by: {
            type: DataTypes.STRING,
            allowNull: true
        },
        short_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'pieces',
        underscored: true
    });
};
