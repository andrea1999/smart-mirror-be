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
  