import { Component } from '@angular/core';
import { PLANOS_LEITURA } from './planos.data';
import { PlanoLeitura } from './plano-leitura';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class PlanosComponent {
  readonly planos: PlanoLeitura[] = PLANOS_LEITURA;
}
