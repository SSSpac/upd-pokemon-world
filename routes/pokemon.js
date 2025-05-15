const express = require('express');
const router = express.Router();
const pokemonData = require('../data/pokemon');

router.get('/', (req, res) => {
  res.render('pages/pokemon-template', { 
    title: 'Pokémon List',
    pokemon: pokemonData,
    subpage: 'list'
  });
});

router.get('/kanto', (req, res) => {
  res.render('pages/pokemon-template', { 
    title: 'Kanto Pokémon',
    pokemon: pokemonData.kanto,
    subpage: 'kanto'
  });
});

router.get('/johto', (req, res) => {
  res.render('pages/pokemon-template', { 
    title: 'Johto Pokémon',
    pokemon: pokemonData.johto,
    subpage: 'johto'
  });
});

module.exports = router;