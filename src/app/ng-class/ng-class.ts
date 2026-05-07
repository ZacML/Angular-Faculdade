import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.scss',
})
export class NgClass {

  public valor: boolean = true;

  public trocaCor(): void {
    this.valor = !this.valor;
  }
}