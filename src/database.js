import { config } from './config.js';
import mysql from 'mysql2/promise.js';

// Crea un pool de conexiones
const pool = mysql.createPool({
  ...config,
  connectionLimit: 10, // Establece el número máximo de conexiones en el pool
});

export const getConnection = async () => {
  return await pool.getConnection();
};
