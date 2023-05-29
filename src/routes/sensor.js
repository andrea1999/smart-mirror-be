import { Router } from 'express';
import { getlastweek, getlatest, getsensor, getsensorHumidity, getsensorPressure, getsensorTemperature, getyesterday } from '../controllers/sensor.js';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Sensor
 *  description: Sensor endpoints
 */

/**
 * @swagger
 * /:
 *  get:
 *   summary: get all sensors
 *   tags: [Sensor]
 */
router.get('/', getsensor);

/**
 * @swagger
 * /sensor/temperature:
 *  get:
 *   summary: get temperature
 *   tags: [Sensor]
 */
router.get('/sensor/temperature', getsensorTemperature);

/**
 * @swagger
 * /sensor/humidity:
 *  get:
 *   summary: get humidity
 *   tags: [Sensor]
 */
router.get('/sensor/humidity', getsensorHumidity);

/**
 * @swagger
 * /sensor/pressure:
 *  get:
 *   summary: get pressure
 *   tags: [Sensor]
 */
router.get('/sensor/pressure', getsensorPressure);

/**
 * @swagger
 * /sensor/latest:
 *  get:
 *   summary: get latest data from sensor
 *   tags: [Sensor]
 */
router.get('/sensor/latest', getlatest);

/**
 * @swagger
 * /sensor/last-week:
 *  get:
 *   summary: get last week's data from sensor
 *   tags: [Sensor]
 */
router.get('/sensor/last-week', getlastweek);

/**
 * @swagger
 * /sensor/yesterday:
 *  get:
 *   summary: get yesterday's data from sensor
 *   tags: [Sensor]
 */
router.get('/sensor/yesterday', getyesterday);

export default router;
