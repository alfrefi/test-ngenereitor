import {
  Component,
  Inject
} from '@angular/core';

import {
  CursoService
} from '../services/curso.service';

type Curso = {
  titulo: string;
  descripcion: string;
  duracion: number;
  _id?: string;
}

@Component({
  selector: 'curso',
  templateUrl: 'cursos/templates/curso.html',
  styleUrls: ['cursos/styles/curso.css']
})
export class CursoComponent {
  title: string = `OOOHH`;
  cursos: Curso[] = [];
  cursoForm: Curso;

  constructor(private _cursoService: CursoService) {
    this.cursoForm = {
      "titulo": "",
      "descripcion": "",
      "duracion": 0
    };
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll(): void {
    this._cursoService
      .getAll()
      .subscribe((cursos) => {
        this.cursos = cursos;
      });
  }

  add(message: string): void {
    this._cursoService
      .add(message)
      .subscribe((m) => {
        this.cursos.push(m);
        this.cursoForm.titulo = "";
        this.cursoForm.descripcion = "";
        this.cursoForm.duracion = 0;
      });
  }

  remove(id: string): void {
    this._cursoService
      .remove(id)
      .subscribe(() => {
        this.cursos.forEach((t, i) => {
          if (t._id === id)
            return this.cursos.splice(i, 1);
        });
      })
  }

}
