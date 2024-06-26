import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialect: "mysql",
    dialectOptions: {
      // Your mysql2 options here
    },
  }
);

async function testConnection() {
  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log("Database connected ...");
      })
      .catch((err) => {
        console.error("Error", err);
      });
  } catch (err) {
    console.error("Unable to connect to the database");
  }
}

testConnection();

export default sequelize;
