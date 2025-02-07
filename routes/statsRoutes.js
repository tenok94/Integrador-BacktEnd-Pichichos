const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente");
const Mascota = require("../models/mascotas");

router.get("/", async (req, res) => {
  try {
    const totalClientes = await Cliente.countDocuments();
    const totalMascotas = await Mascota.countDocuments();
    res.json({ clientes: totalClientes, mascotas: totalMascotas });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener estadísticas", error });
  }
});

module.exports = router;
