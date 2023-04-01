import * as dotenv from 'dotenv' 

dotenv.config();

const database = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const appPort = process.env.APP_PORT;

export {
    database,
    user,
    password,
    host,
    appPort
};