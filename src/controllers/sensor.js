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
    const [rows] = await connection.query('SELECT DATE(FROM_UNIXTIME(timestamp)) AS date, AVG(temperature) AS average_temperature, AVG(humidity) AS average_humidity, AVG(pressure) AS average_pressure FROM sensors WHERE timestamp >= UNIX_TIMESTAMP(CURDATE() - INTERVAL 7 DAY) GROUP BY DATE(FROM_UNIXTIME(timestamp)) ORDER BY date DESC')
    res.json(rows);
  };
  