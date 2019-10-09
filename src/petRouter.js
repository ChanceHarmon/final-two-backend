'use strict'

const express = require('express');
const uuid = require('uuid/v4');

const router = express.Router();

let petToys = [
  { _id: uuid(), name: 'Conan', toy: 'ball' }
];

router.get('/pets', (request, response) => {
  response.status(200).json(petToys);
})

module.exports = router;
