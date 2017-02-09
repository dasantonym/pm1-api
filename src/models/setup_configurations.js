module.exports = function(sequelize, DataTypes) {
    return sequelize.define('setup_configurations', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        time_zone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        use_auto_video: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        read_only: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        use_heroku: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        s3_sub_folder: {
            type: DataTypes.STRING,
            allowNull: true
        },
        default_piece_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        file_locations: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        desired_on_time: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        min_entrances: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        max_entrances: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        min_entrance_time: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        max_entrance_time: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'setup_configurations',
        underscored: true
    });
};
