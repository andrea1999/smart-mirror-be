CREATE DATABASE IF NOT EXISTS database_sensors;

USE database_sensors;

CREATE TABLE IF NOT EXISTS sensors(
    timestamp varchar(20) NOT NULL,
    temperature float,
    humidity float,
    pressure float;
    PRIMARY KEY (timestamp)
);
