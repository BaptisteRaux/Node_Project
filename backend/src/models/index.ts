import sequelize from '../database';
import { DataTypes } from 'sequelize';

export const Film = sequelize.define('Film', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
});

export const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
});

export const initModels = async () => {
    await sequelize.sync({ force: true }); // Attention : supprime et recrée les tables à chaque démarrage
    console.log('Database synchronized');
};
