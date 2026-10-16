import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlanoLeitura } from './plano-leitura';

@Component({
  selector: 'app-plano-grid',
  imports: [RouterLink],
  templateUrl: './plano-grid.html',
  styleUrl: './plano-grid.css',
})
export class PlanoGridComponent {
  readonly planos = input.required<PlanoLeitura[]>();
}
