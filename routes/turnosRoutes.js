const express = require("express");
const router = express.Router();
const Turno = require("../models/turno");

router.get("/", async (req, res) => {
  try {
    const turnos = await Turno.find().populate("mascota cliente");
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los turnos", error });
  }
});

module.exports = router;
