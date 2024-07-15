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

const getAllSpecies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM species');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSpecies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM species WHERE id = $1', [
      req.params.id,
    ]);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addSpecies = async (req, res) => {
  try {
    const { iucn_status, compatibility, habitat, scientific_name, potency } =
      req.body;
    const result = await pool.query(
      'INSERT INTO species (iucn_status, compatibility, habitat, scientific_name, potency) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [iucn_status, compatibility, habitat, scientific_name, potency]
    );
    res.status(201).json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const searchSpecies = async (req, res) => {
  try {
    const { searchBy, keyword } = req.query;
    let column;

    switch (searchBy) {
      case 'local_name':
        column = 'local_name'; // Adjust this according to your database column names
        break;
      case 'scientific':
        column = 'scientific_name'; // Adjust this according to your database column names
        break;
      default:
        return res.status(400).json({ error: 'Invalid search parameter' });
    }

    const query = `SELECT * FROM species WHERE ${column} ILIKE $1`;
    const values = [`%${keyword}%`];

    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllSpecies,
  getSpecies,
  addSpecies,
  searchSpecies,
};
