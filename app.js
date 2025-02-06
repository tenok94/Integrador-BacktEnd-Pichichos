const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Importa la función para conectar MongoDB

console.log("Stats route registered");
console.log("Turnos route registered");

// Importar rutas
const clienteRoutes = require('./routes/clienteRoutes');
const mascotaRoutes = require('./routes/mascotaRoutes');
const authRoutes = require('./routes/authRoutes'); // Rutas de autenticación
const statsRoutes = require("./routes/statsRoutes");
const turnosRoutes = require("./routes/turnosRoutes");

app.use("/stats", statsRoutes);
app.use("/turnos", turnosRoutes);

// Configuración de variables de entorno
dotenv.config(); // Cargar variables desde .env


// Conectar a MongoDB Atlas
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/clientes', clienteRoutes);
app.use('/mascotas', mascotaRoutes);
app.use('/auth', authRoutes); // Usar rutas de autenticación

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
