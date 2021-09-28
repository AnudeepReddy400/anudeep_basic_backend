module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        first_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        last_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        contact_no: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        plain_password: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        password_reset_token: {
            allowNull: true,
            type: DataTypes.STRING
        },
        dob: {
            allowNull: true,
            type: DataTypes.STRING(10)
        },
        gender: {
            allowNull: true,
            type: DataTypes.ENUM('M', 'F', 'O')
        },
        role_id: {
            allowNull: false,
            type: DataTypes.ENUM('1', '2', '3', '4', '5')
        },
        is_verified: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        image_path: {
            allowNull: true,
            type: DataTypes.STRING
        },
        medical_id: {
            allowNull: true,
            type: DataTypes.STRING
        },
        clinic_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'Clinic',
            },
        },
        uuid: {
            allowNull: true,
            type: DataTypes.STRING
        },
        device_token: {
            allowNull: true,
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'users',
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });
    User.associate = (models) => {};
    return User;
};
