import { SequelizeOptions } from "sequelize-typescript"

const sequelize:SequelizeOptions = {
  username: 'root',
  password: '123456',
  database: 'bennett_production',
  host: '127.0.0.1',
  dialect: 'mysql'
}

export default {
  sequelize
}
