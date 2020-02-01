const express = require('express');
const router = express.Router();
const db = require('./data/dbConfig.js');

router.get('/', (req, res) => {
  db('accounts').then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(500).json({message: err})
  })
});

router.post('/', (req, res) => {
  db('accounts').insert(req.body).then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(500).json({message: err})
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  db('accounts').where({ id: id}).update(req.body).then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(500).json({message: err})
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('accounts').where({ id: id}).del().then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(500).json({message: err});
  })
})

module.exports = router;
