const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
