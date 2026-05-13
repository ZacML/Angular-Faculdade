import { Component } from '@angular/core';
import { CpAComponent } from '../cp-a/cp-a';
import { CpBComponent } from '../cp-b/cp-b';

@Component({
  selector: 'app-cp-agrupador',
  imports: [CpAComponent, CpBComponent],
  templateUrl: './cp-agrupador.html',
  styleUrl: './cp-agrupador.scss',
})
export class CpAgrupador {
    
  
}
