const mongoose = require('mongoose');

const vacunaSchema = new mongoose.Schema({
    nombre: { type: String, required: true }, // Nombre de la vacuna
    fecha: { type: Date, required: true },   // Fecha de aplicación
});

const mascotaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    raza: { type: String },
    edad: { type: Number },
    cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    vacunas: [vacunaSchema], // Historial de vacunas como array de subdocumentos
});

module.exports = mongoose.model('Mascota', mascotaSchema);
