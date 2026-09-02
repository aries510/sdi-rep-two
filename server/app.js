const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.status(200).send('Server is up. Welcome to the home page. Please navigate to the correct endpoint.')
})




app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))