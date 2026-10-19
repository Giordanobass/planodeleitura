import { Component } from '@angular/core';
import { ComboGridComponent } from './combo-grid';
import { COMBOS_LIVROS } from './combos.data';

@Component({
  selector: 'app-galeria',
  imports: [ComboGridComponent],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class GaleriaComponent {
  readonly combos = COMBOS_LIVROS;
}
