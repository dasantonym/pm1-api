module.exports = function (sequelize, DataTypes) {
    return sequelize.define('castings', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        piece_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        is_original: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        cast_number: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '1'
        },
        updated_at: {
            type: DataTypes.TIME,
            allowNull: true
        }
    }, {
        tableName: 'castings',
        underscored: true
    });
};
