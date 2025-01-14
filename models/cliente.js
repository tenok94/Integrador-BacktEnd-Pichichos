const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true, maxlength: 50 },
    telefono: { type: String, required: true, minlength: 7 },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Validador de email
    },
});

module.exports = mongoose.model('Cliente', clienteSchema);