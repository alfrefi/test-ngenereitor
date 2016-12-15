"use strict";

const cursoDAO = require('../dao/curso-dao');

module.exports = class cursoController {
  static getAll(req, res) {
    cursoDAO
      .getAll()
      .then(curso => res.status(200).json(curso))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _curso = req.body.curso;
    
    console.log(_curso);
    
    cursoDAO
      .createNew(_curso)
      .then(curso => res.status(201).json(curso))
      .catch(error => {
        console.log(error)
        res.status(400).json(error);
      });
  }

  static removeById(req, res) {
    let _id = req.params.id;

    cursoDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
