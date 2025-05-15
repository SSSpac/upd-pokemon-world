const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home', { 
    title: 'Pokémon World', 
    welcomeMessage: 'Welcome to the world of Pokemon!'
  });
});

module.exports = router;