"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
const CursoRoutes = require('../api/cursos/routes/curso-route');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     CursoRoutes.init(router);


     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     
     app.use('/', router);
   }
}
