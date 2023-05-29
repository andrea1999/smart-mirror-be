"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _sensor = require("../controllers/sensor.js");
var router = (0, _express.Router)();

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
router.get('/', _sensor.getsensor);

/**
 * @swagger
 * /sensor/temperature:
 *  get:
 *   summary: get temperature
 *   tags: [Sensor]
 */
router.get('/sensor/temperature', _sensor.getsensorTemperature);

/**
 * @swagger
 * /sensor/humidity:
 *  get:
 *   summary: get humidity
 *   tags: [Sensor]
 */
router.get('/sensor/humidity', _sensor.getsensorHumidity);

/**
 * @swagger
 * /sensor/pressure:
 *  get:
 *   summary: get pressure
 *   tags: [Sensor]
 */
router.get('/sensor/pressure', _sensor.getsensorPressure);

/**
 * @swagger
 * /sensor/latest:
 *  get:
 *   summary: get latest data from sensor
 *   tags: [Sensor]
 */
router.get('/sensor/latest', _sensor.getlatest);

/**
 * @swagger
 * /sensor/last-week:
 *  get:
 *   summary: get last week's data from sensor
 *   tags: [Sensor]
 */
router.get('/sensor/last-week', _sensor.getlastweek);

/**
 * @swagger
 * /sensor/yesterday:
 *  get:
 *   summary: get yesterday's data from sensor
 *   tags: [Sensor]
 */
router.get('/sensor/yesterday', _sensor.getyesterday);
var _default = router;
exports["default"] = _default;