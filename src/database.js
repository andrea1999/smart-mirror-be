import { config } from './config.js';
import mysql from 'mysql2/promise.js';

export const connect = async () => {
    return await mysql.createConnection(config)
}
