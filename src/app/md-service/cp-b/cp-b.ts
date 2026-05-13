import { Component } from '@angular/core';
import { ExemploService } from '../services/exemplo-service';

@Component({
  selector: 'app-cp-b',
  imports: [],
  templateUrl: './cp-b.html',
  styleUrl: './cp-b.scss',
})
export class CpBComponent {

  public lista: Array<string> = [];

  //Injeção de dependência do service
  constructor(private service: ExemploService) {
    this.lista = this. service.lista;
    this. service. listaAtualizada. subscribe(listaAtualizada => {
      this.lista = listaAtualizada;
    });
  }

}
