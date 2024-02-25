const mysql = require("mysql2");
const session = require("express-session");
const express = require("express");

const pool = mysql.createPool({
  host: "d6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "j0eavo4w84vv26tb",
  password: "wledi0zzrtg8y3t6",
  database: "uzcvb6q6y6ce6hgg",
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

module.exports = pool;
