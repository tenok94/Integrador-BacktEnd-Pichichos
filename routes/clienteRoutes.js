const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');
const authMiddleware = require('../middleware/authMiddleware'); // Importar el middleware

// Listar todos los clientes (protegido)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un cliente (protegido)
router.post('/', authMiddleware, async (req, res) => {
    const { nombre, telefono, email } = req.body;

    try {
        const nuevoCliente = new Cliente({ nombre, telefono, email });
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener un cliente por ID (protegido)
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un cliente (protegido)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!clienteActualizado) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(clienteActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un cliente (protegido)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!clienteEliminado) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
