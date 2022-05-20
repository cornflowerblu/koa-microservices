import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import app from './app'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './users.db'
});

const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection();

dotenv.config();
const port = process.env.PORT || 8080

app.listen(port)
console.info(`Listening to http://localhost:${port} 🚀`)