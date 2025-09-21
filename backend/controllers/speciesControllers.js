const { get } = require('http');

require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const getAllSpecies = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM species');

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Species not found' });
    }

    for (const row of rows) {
      const [imageRows] = await pool.query(
        'SELECT image.link_id FROM image WHERE is_spec IS TRUE AND spec_arti_id = ?',
        [row.id]
      );
      imageRows && imageRows[0]
        ? (row.image = imageRows[0].link_id)
        : (row.image = null);
    }

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSpecies = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM species WHERE id = ?', [
      req.params.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Species not found' });
    }

    // Get all images for that species
    const [imageRows] = await pool.query(
      'SELECT image.link_id FROM image WHERE is_spec IS TRUE AND spec_arti_id = ?',
      [req.params.id]
    );

    // Attach images as an array
    rows[0].images = imageRows.map((img) => img.link_id);

    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addSpecies = async (req, res) => {
  try {
    const { iucn_status, compatibility, habitat, scientific_name, potency } =
      req.body;
    const [result] = await pool.query(
      'INSERT INTO species (iucn_status, compatibility, habitat, scientific_name, potency) VALUES (?, ?, ?, ?, ?)',
      [iucn_status, compatibility, habitat, scientific_name, potency]
    );
    res.status(201).json(result);
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

    const query = `SELECT * FROM species WHERE ${column} LIKE ?`;
    const values = [`%${keyword}%`];

    const [rows] = await pool.query(query, values);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Species not found' });
    }

    for (const row of rows) {
      const [imageRows] = await pool.query(
        'SELECT image.link_id FROM image WHERE is_spec IS TRUE AND spec_arti_id = ?',
        [row.id]
      );
      imageRows && imageRows[0]
        ? (row.image = imageRows[0].link_id)
        : (row.image = null);
    }

    res.status(200).json(rows);
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
