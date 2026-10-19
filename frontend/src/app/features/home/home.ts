import { Component } from '@angular/core';
import { ComboGridComponent } from '../galeria/combo-grid';
import { COMBOS_LIVROS } from '../galeria/combos.data';

@Component({
  selector: 'app-home',
  imports: [ComboGridComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  readonly combos = COMBOS_LIVROS;
}
