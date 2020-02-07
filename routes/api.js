const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/event', (req, res, next) => {
  // Return the event
  Event.find({}, 'name')
    .then(data => res.json(data))
    .catch(next);
});

router.post('/event', (req, res, next) => {
  if (req.body.name) {
    Event.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty'
    });
  }
});

router.delete('/event/:id', (req, res, next) => {
  Event.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
