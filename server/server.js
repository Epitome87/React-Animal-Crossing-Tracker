const express = require('express');
const cors = require('cors');
const app = express();

const fishRouter = require('./app/routes/fish.routes');

app.use(cors());

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/fish', fishRouter);

// Home route - testing purposes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Animal Crossing Tracker!' });
});

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
