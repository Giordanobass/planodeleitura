import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComboLivro } from './combo-livro';

@Component({
  selector: 'app-combo-grid',
  imports: [RouterLink],
  templateUrl: './combo-grid.html',
  styleUrl: './combo-grid.css',
})
export class ComboGridComponent {
  readonly combos = input.required<ComboLivro[]>();
}
