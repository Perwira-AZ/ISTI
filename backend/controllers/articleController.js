require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const getAllArticles = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM article');

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Articles not found' });
    }

    for (const row of rows) {
      const imageRow = await pool.query(
        'SELECT image.link_id FROM image WHERE is_spec IS FALSE AND spec_arti_id = ?',
        [row.id]
      );
      imageRow ? (row.image = imageRow.link_id) : (row.image = null);
    }

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getArticle = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM article WHERE id = ?', [
      req.params.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }

    const [imageRows] = await pool.query(
      'SELECT image.link_id FROM image WHERE is_spec IS FALSE AND spec_arti_id = ?',
      [req.params.id]
    );

    rows[0].image = imageRows.map((img) => img.link_id);

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllArticles,
  getArticle,
};
