// routes/api/Festivals.js

const express = require('express');
const router = express.Router();

// Load Festival model
const Festival = require('../../models/Festivals');

// @route   GET api/festivals/test
// @desc    Tests festivals route
// @access  Public
router.get('/test', (req, res) => res.send('festival route testing!'));

// @route   GET api/festivals
// @desc    Get all festivals
// @access  Public
router.get('/', (req, res) => {
  Festival.find()
    .then(festivals => res.json(festivals))
    .catch(err => res.status(404).json({ nofestivalsfound: 'No Festivals found' }));
});

// @route   GET api/festivals/:id
// @desc    Get single festival by id
// @access  Public
router.get('/:id', (req, res) => {
  Festival.findById(req.params.id)
    .then(festival => res.json(festival))
    .catch(err => res.status(404).json({ nofestivalfound: 'No Festival found' }));
});

// @route   POST api/festivals
// @desc    Add/save festival
// @access  Public
router.post('/', (req, res) => {
  Festival.create(req.body)
    .then(festival => res.json({ msg: 'Festival added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Festival' }));
});

// @route   PUT api/festivals/:id
// @desc    Update festival by id
// @access  Public
router.put('/:id', (req, res) => {
  Festival.findByIdAndUpdate(req.params.id, req.body)
    .then(festival => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route   DELETE api/festivals/:id
// @desc    Delete festival by id
// @access  Public
router.delete('/:id', (req, res) => {
  Festival.findByIdAndDelete(req.params.id)
    .then(festival => res.json({ mgs: 'Festival entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such Festival' }));
});

module.exports = router;