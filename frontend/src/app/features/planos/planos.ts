import { Component } from '@angular/core';
import { PlanoGridComponent } from './plano-grid';
import { PLANOS_LEITURA } from './planos.data';

@Component({
  selector: 'app-planos',
  imports: [PlanoGridComponent],
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class PlanosComponent {
  readonly planos = PLANOS_LEITURA;
}
