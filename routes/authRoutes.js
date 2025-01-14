const express = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
    const { nombre, email, password } = req.body;

    try {
        const existeUsuario = await Usuario.findOne({ email });
        if (existeUsuario) return res.status(400).json({ message: 'El email ya está registrado' });

        const nuevoUsuario = new Usuario({ nombre, email, password });
        await nuevoUsuario.save();

        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

        const passwordValido = await usuario.compararPassword(password);
        if (!passwordValido) return res.status(401).json({ message: 'Contraseña incorrecta' });

        // Generar token
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
});

module.exports = router;
