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
    const { iucn_status, compatibilty, habitat, scientific_name, potency } =
      req.body;
    const result = await pool.query(
      'INSERT INTO species (iucn_status, compatibility, habitat, scientific_name, potency) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [iucn_status, compatibilty, habitat, scientific_name, potency]
    );
    res.status(201).json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllSpecies,
  getSpecies,
  addSpecies,
};
