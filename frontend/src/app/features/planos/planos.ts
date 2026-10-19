import { Component } from '@angular/core';
import { PlanoTempo } from './plano-tempo';
import { PLANOS_TEMPO } from './planos-tempo.data';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class PlanosComponent {
  readonly planos: PlanoTempo[] = PLANOS_TEMPO;
}
