import { Component } from '@angular/core';
import { PlanoGridComponent } from '../planos/plano-grid';
import { PLANOS_LEITURA } from '../planos/planos.data';

@Component({
  selector: 'app-home',
  imports: [PlanoGridComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  readonly planos = PLANOS_LEITURA;
}
