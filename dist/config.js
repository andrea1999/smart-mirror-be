"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var config = {
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'root',
  password: process.env.PW || 'root',
  database: 'database_sensors' || 'test'
};
exports.config = config;