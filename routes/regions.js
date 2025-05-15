const express = require('express');
const router = express.Router();
const regionsData = require('../data/regions');

router.get('/', (req, res) => {
  res.render('pages/region-template', { 
    title: 'Pokémon Regions',
    regions: regionsData,
    subpage: 'list'
  });
});

router.get('/kanto', (req, res) => {
  const region = regionsData.find(r => r.name.toLowerCase() === 'kanto');
  res.render('pages/region-template', { 
    title: 'Kanto Region',
    region: region,
    subpage: 'detail'
  });
});

router.get('/johto', (req, res) => {
  const region = regionsData.find(r => r.name.toLowerCase() === 'johto');
  res.render('pages/region-template', { 
    title: 'Johto Region',
    region: region,
    subpage: 'detail'
  });
});

module.exports = router;