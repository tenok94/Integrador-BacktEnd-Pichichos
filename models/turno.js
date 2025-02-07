const mongoose = require("mongoose");

const TurnoSchema = new mongoose.Schema({
  mascota: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mascota",
    required: true,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  notas: {
    type: String,
  },
});

module.exports = mongoose.model("Turno", TurnoSchema);
