const express = require("express");
const router = express.Router();
const Turno = require("../models/Turno");
const authMiddleware = require("../middleware/authMiddleware");

// Listar todos los turnos
router.get("/", authMiddleware, async (req, res) => {
  try {
    const turnos = await Turno.find()
      .populate("mascota", "nombre especie")
      .populate("cliente", "nombre email");
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener turnos", error });
  }
});

// Crear un turno
router.post("/", authMiddleware, async (req, res) => {
  const { mascota, cliente, fecha, notas } = req.body;

  try {
    const nuevoTurno = new Turno({ mascota, cliente, fecha, notas });
    await nuevoTurno.save();
    res.status(201).json(nuevoTurno);
  } catch (error) {
    res.status(400).json({ message: "Error al crear turno", error });
  }
});

// Actualizar un turno
router.put("/:id", authMiddleware, async (req, res) => {
  const { mascota, cliente, fecha, notas } = req.body;

  try {
    const turnoActualizado = await Turno.findByIdAndUpdate(
      req.params.id,
      { mascota, cliente, fecha, notas },
      { new: true }
    );
    res.json(turnoActualizado);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar turno", error });
  }
});

// Eliminar un turno
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Turno.findByIdAndDelete(req.params.id);
    res.json({ message: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar turno", error });
  }
});

module.exports = router;