const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const pokemonRouter = require('./routes/pokemon');
const regionsRouter = require('./routes/regions');

app.use('/', indexRouter);
app.use('/pokemon', pokemonRouter);
app.use('/regions', regionsRouter);

app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Page Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});