const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/event', (req, res, next) => {
  // Return the event
  Event.find({}, 'name')
    .then(data => res.json(data))
    .catch(next);
});

// Read all events
router.get('/events', (req, res, next) => {
  res.json([
    {
      userId: '123',
      date: Date.now(),
      name: 'Event Name 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      userId: '123',
      date: Date.parse(new Date(Date.UTC(96, 1, 2, 3, 4, 5))),
      name: 'Event Name 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      userId: '123',
      date: Date.parse(new Date(Date.UTC(2020, 11, 2, 3, 4, 5))),
      name: 'Event Name 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      userId: '123',
      date: Date.parse(new Date(Date.UTC(2020, 2, 12, 3, 4, 5))),
      name: 'Event Name 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      userId: '123',
      date: Date.parse(new Date(Date.UTC(96, 1, 4, 3, 4, 5))),
      name: 'Event Name 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      userId: '123',
      date: Date.parse(new Date(Date.UTC(96, 2, 2, 3, 4, 5))),
      name: 'Event Name 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      userId: '123',
      date: Date.parse(new Date(Date.UTC(2001, 1, 2, 3, 4, 5))),
      name: 'Event Name 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      userId: '123',
      date: Date.parse(new Date(Date.UTC(2004, 2, 2, 3, 4, 5))),
      name: 'Event Name 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim autem nulla dolor voluptate eos unde dolorum, cum labore, accusantium ab voluptas quasi iusto sequi.',
      tags: ['Tag 1', 'Tag 2']
    }
  ]);
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
