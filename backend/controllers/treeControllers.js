const { get } = require('http');

require('dotenv').config();

const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const getAllTree = (req, res) => {
  try {
    const result = pool.query('SELECT * FROM tree');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getTree = (req, res) => {
  try {
    const result = pool.query('SELECT * FROM tree WHERE id = $1', [
      req.params.id,
    ]);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addTree = (req, res) => {
  try {
    const { species_id, long_lat, ip_id, height, circumference } = req.body;
    const result = pool.query(
      'INSERT INTO tree (species_id, long_lat, ip_id, height, circumference) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [species_id, long_lat, ip_id, height, circumference]
    );
    res.status(201).json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTree,
  getTree,
  addTree,
};
