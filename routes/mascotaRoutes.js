const express = require('express');
const router = express.Router();
const Mascota = require('../models/Mascotas');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware para proteger rutas

// Crear una mascota vinculada a un cliente
router.post('/', authMiddleware, async (req, res) => {
    const { nombre, especie, raza, edad, cliente_id } = req.body;

    try {
        const nuevaMascota = new Mascota({ nombre, especie, raza, edad, cliente_id });
        await nuevaMascota.save();
        res.status(201).json(nuevaMascota);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', authMiddleware, async (req, res) => {
    const { cliente_id } = req.query;

    try {
        const mascotas = cliente_id
            ? await Mascota.find({ cliente_id }) // Filtrar por cliente_id si está presente
            : await Mascota.find(); // Mostrar todas las mascotas si no se proporciona cliente_id

        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Agregar una vacuna al historial de una mascota
router.put('/:id/vacunas', authMiddleware, async (req, res) => {
    const { nombre, fecha } = req.body;

    if (!nombre || !fecha) {
        return res.status(400).json({ message: 'El nombre y la fecha son obligatorios' });
    }

    try {
        const mascota = await Mascota.findById(req.params.id);
        if (!mascota) return res.status(404).json({ message: 'Mascota no encontrada' });

        mascota.vacunas.push({ nombre, fecha });
        await mascota.save();

        res.status(200).json({ message: 'Vacuna agregada correctamente', mascota });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener el historial de vacunas de una mascota
router.get('/:id/vacunas', authMiddleware, async (req, res) => {
    try {
        const mascota = await Mascota.findById(req.params.id).select('vacunas');
        if (!mascota) return res.status(404).json({ message: 'Mascota no encontrada' });

        res.status(200).json({ vacunas: mascota.vacunas });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar una mascota existente
router.put('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { nombre, especie, raza, edad, cliente_id } = req.body;

    try {
        const mascotaActualizada = await Mascota.findByIdAndUpdate(
            id,
            { nombre, especie, raza, edad, cliente_id },
            { new: true } // Esto devuelve la mascota actualizada
        );

        if (!mascotaActualizada) {
            return res.status(404).json({ message: "Mascota no encontrada" });
        }

        res.json(mascotaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;
