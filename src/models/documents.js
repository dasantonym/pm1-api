module.exports = function(sequelize, DataTypes) {
    return sequelize.define('documents', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        doc_file_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        doc_content_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        doc_file_size: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        piece_id: {
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
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'documents',
        underscored: true
    });
};
