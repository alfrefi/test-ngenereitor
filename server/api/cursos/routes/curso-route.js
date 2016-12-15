"use strict";

const cursoController = require('../controller/curso-controller');

module.exports = class cursoRoutes {
  static init(router) {
    router
      .route('/api/curso')
      .get(cursoController.getAll)
      .post(cursoController.createNew);

    router
      .route('/api/curso/:id')
      .delete(cursoController.removeById);
  }
}
