const express = require('express');
const router = express.Router({ mergeParams: true });
const fishes = require('../controllers/fish.controller.js');

// Create a new Fish
router.route('/').post(fishes.create);

// Retrieve all Fish
router.route('/').get(fishes.findAll);

// Retrieve a single Fish with id
router.route('/:id').get(fishes.findOne);

// Update a Fish with id
router.route('/:id').put(fishes.update);

// Delete a Fish with id
router.route('/:id').delete(fishes.delete);

// Delete all Fish
router.route('/').delete(fishes.deleteAll);

module.exports = router;
