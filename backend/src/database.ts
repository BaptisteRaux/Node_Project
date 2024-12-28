import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('web_project', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

export default sequelize;
