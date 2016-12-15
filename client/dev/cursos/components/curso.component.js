"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var curso_service_1 = require("../services/curso.service");
var CursoComponent = (function () {
    function CursoComponent(_cursoService) {
        this._cursoService = _cursoService;
        this.title = "OOOHH";
        this.cursos = [];
        this.cursoForm = {
            "titulo": "",
            "descripcion": "",
            "duracion": 0
        };
    }
    CursoComponent.prototype.ngOnInit = function () {
        this._getAll();
    };
    CursoComponent.prototype._getAll = function () {
        var _this = this;
        this._cursoService
            .getAll()
            .subscribe(function (cursos) {
            _this.cursos = cursos;
        });
    };
    CursoComponent.prototype.add = function (message) {
        var _this = this;
        this._cursoService
            .add(message)
            .subscribe(function (m) {
            _this.cursos.push(m);
            _this.cursoForm.titulo = "";
            _this.cursoForm.descripcion = "";
            _this.cursoForm.duracion = 0;
        });
    };
    CursoComponent.prototype.remove = function (id) {
        var _this = this;
        this._cursoService
            .remove(id)
            .subscribe(function () {
            _this.cursos.forEach(function (t, i) {
                if (t._id === id)
                    return _this.cursos.splice(i, 1);
            });
        });
    };
    return CursoComponent;
}());
CursoComponent = __decorate([
    core_1.Component({
        selector: 'curso',
        templateUrl: 'cursos/templates/curso.html',
        styleUrls: ['cursos/styles/curso.css']
    }),
    __metadata("design:paramtypes", [curso_service_1.CursoService])
], CursoComponent);
exports.CursoComponent = CursoComponent;
