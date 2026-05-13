import { Component } from '@angular/core';
import { ExemploService } from '../services/exemplo-service';

@Component({
  selector: 'app-cp-a',
  imports: [],
  templateUrl: './cp-a.html',
  styleUrl: './cp-a.scss',
})
export class CpAComponent {
  
  public qt:number = 0;

  //Injeção de dependência do service
  constructor(private service: ExemploService) {
    this. service. listaAtualizada. subscribe(lista => {
      this.qt = lista.length;
    });
  }

  public addItem(valor: string){
    return this.service. adiciona(valor);
  }
}
