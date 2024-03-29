const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/movie')
const movieRoutes = require('./routes/movieRoutes')

const PORT = 3000;
const URL = 'mongodb://localhost:27017/movieBox'

const app = express();
app.use(express.json())
app.use(movieRoutes)

mongoose.connect(URL).then(() => console.log('Connected to MongoDB')).catch((err) => console.error(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
	err ? console.log(err) : console.log(`listening port ${PORT}`);
});

