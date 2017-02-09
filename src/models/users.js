module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        crypted_password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        salt: {
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
        remember_token: {
            type: DataTypes.STRING,
            allowNull: true
        },
        remember_token_expires_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '1'
        },
        role_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        notes_on: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        markers_on: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        refresh_pref: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '0'
        },
        truncate: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'more'
        },
        inherit_cast: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        last_login: {
            type: DataTypes.TIME,
            allowNull: true
        },
        scratchpad: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_performer: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        password_digest: {
            type: DataTypes.STRING,
            allowNull: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'users',
        underscored: true
    });
};
