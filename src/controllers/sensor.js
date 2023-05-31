import { connect } from "../database.js";

export const getsensor = async (req, res) => {
  const connection = await connect()
  const [rows] = await connection.query('SELECT * FROM sensors')
  res.json(rows);
};

export const getsensorTemperature = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT timestamp, temperature FROM sensors')
    res.json(rows);
  };

  export const getsensorHumidity = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT timestamp, humidity FROM sensors')
    res.json(rows);
  };

  export const getsensorPressure = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT timestamp, pressure FROM sensors')
    res.json(rows);
  };

  export const getlatest = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM sensors ORDER BY timestamp DESC LIMIT 1')
    res.json(rows);
  };

  export const getlastweek = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query(`
    SELECT DATE_FORMAT(FROM_UNIXTIME(timestamp / 1000), '%d-%m-%Y') AS date,
           AVG(temperature) AS average_temperature,
           AVG(humidity) AS average_humidity,
           AVG(pressure) AS average_pressure
    FROM sensors
    WHERE DATE(FROM_UNIXTIME(timestamp / 1000)) >= CURDATE() - INTERVAL 7 DAY
          AND timestamp >= UNIX_TIMESTAMP(CURDATE() - INTERVAL 7 DAY) * 1000
          AND timestamp < UNIX_TIMESTAMP(CURDATE()) * 1000
    GROUP BY DATE_FORMAT(FROM_UNIXTIME(timestamp / 1000), '%Y-%m-%d')
    ORDER BY date ASC;
    `)
    res.json(rows);
  };
  
  export const getyesterday = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query(`
    SELECT *
    FROM sensors
    WHERE DATE(FROM_UNIXTIME(timestamp / 1000)) = CURDATE() - INTERVAL 1 DAY
    ORDER BY ABS(timestamp - UNIX_TIMESTAMP(NOW())) ASC
    LIMIT 1;
    `)
    res.json(rows);
  };