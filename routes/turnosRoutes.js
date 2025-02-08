const express = require("express");
const router = express.Router();
const Turno = require("../models/Turno");
const authMiddleware = require("../middleware/authMiddleware");

// Crear un turno
router.post("/", authMiddleware, async (req, res) => {
  const { mascota, cliente, fecha, notas } = req.body;

  try {
    const nuevoTurno = new Turno({ mascota, cliente, fecha, notas });
    await nuevoTurno.save();
    res.status(201).json(nuevoTurno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener todos los turnos
router.get("/", authMiddleware, async (req, res) => {
  try {
    const turnos = await Turno.find()
      .populate("mascota", "nombre")
      .populate("cliente", "nombre");
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar un turno
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await Turno.findByIdAndDelete(id);
    res.json({ message: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;