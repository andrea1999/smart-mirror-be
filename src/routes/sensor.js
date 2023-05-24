import { Router } from 'express';
import { getsensorHumidity, getsensorPressure, getsensorTemperature } from '../controllers/sensor.js';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Sensor
 *  description: Sensor endpoints
 */



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

export default router;
