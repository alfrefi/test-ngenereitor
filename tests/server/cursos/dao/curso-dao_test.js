"use strict";

const mongoose = require('mongoose');
const cursoDAO = require(process.cwd() + '/server/api/cursos/dao/curso-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('cursoDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    cursoDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
