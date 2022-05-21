import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize/types";
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: string
    name: CreationOptional<string>
    email: string
    password: string
    occupation: CreationOptional<string>
}

const User = sequelize.define<UserModel>('User', {
    id: {
        primaryKey: true,
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true