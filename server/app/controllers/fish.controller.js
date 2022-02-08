const pool = require('../../db');

// Get All Fish
exports.findAll = async (req, res) => {
  try {
    const allFish = await pool.query('SELECT * FROM fish');
    res.json(allFish.rows);
  } catch (error) {
    console.error(error.message);
  }
};

// Get a specific Fish
exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const fish = await pool.query('SELECT * FROM fish WHERE id = $1', [id]);
    res.json(fish.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

// Create new Fish
exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const newFish = await pool.query(
      'INSERT INTO fish (name) VALUES($1) RETURNING *',
      [name]
    );
    res.json(newFish.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

// Update a Fish
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedFish = await pool.query(
      'UPDATE fish SET name = $1 WHERE fish.id = $2',
      [name, id]
    );
    res.json('Fish was updated: ' + updatedFish.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

// Delete a Fish
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFish = await pool.query('DELETE FROM fish WHERE id = $1', [
      id,
    ]);
    res.json('Fish successfully deleted!');
  } catch (error) {
    console.error(error.message);
  }
};

// Delete all Fish
exports.deleteAll = async (req, res) => {
  try {
    const deletedFishes = await pool.query('DELETE * FROM fish');
    res.json('Successfully deleted all Fishes!');
  } catch (error) {
    console.error(error.message);
  }
};
