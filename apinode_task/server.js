require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const initDB = require('./config/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/tasks', taskRoutes);

// Init servidor y db
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {

    await initDB(); 

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar la aplicación:', error);
  }
};

startServer();