"use strict";

const mongoose = require('mongoose');

const _cursoSchema = {
  titulo: {type: String},
  descripcion: {type: String},
  duracion: {type: String },
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_cursoSchema);
