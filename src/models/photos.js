module.exports = function(sequelize, DataTypes) {
    return sequelize.define('photos', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        picture_file_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        picture_content_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        picture_file_size: {
            type: DataTypes.INTEGER,
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
        piece_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        has_thumb: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'photos',
        underscored: true
    });
};
