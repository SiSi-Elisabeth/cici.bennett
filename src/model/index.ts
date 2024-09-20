import { Sequelize } from "sequelize-typescript";
import { config } from "../config";
import { Article } from "./Article";


const sequelize = new Sequelize({
  ...config.sequelize,
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
  models:[Article]
})
// sequelize.addModels([Article]);
sequelize.sync({ alter: true });

// .authenticate()
  // .then(() => {
  //   console.log('Connection has been established successfully.');
  // })
  // .catch(err => {
  //   console.error('Unable to connect to the database:', err);
  // });