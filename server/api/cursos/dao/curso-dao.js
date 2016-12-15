"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const cursoSchema = require('../model/curso-model');
const _ = require('lodash');

cursoSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    Curso
      .find(_query)
      .exec((err, cursos) => {
        err ? reject(err)
          : resolve(cursos);
      });
  });
}

cursoSchema.statics.createNew = (curso) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(curso)) {
      return reject(new TypeError('curso is not a valid object.'));
    }

    let _something = new Curso(curso);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

cursoSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    Curso
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const Curso = mongoose.model('curso', cursoSchema);

module.exports = Curso;
