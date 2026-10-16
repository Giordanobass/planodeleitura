import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PLANOS_LEITURA } from './planos.data';

@Component({
  selector: 'app-plano-detalhe',
  imports: [RouterLink],
  templateUrl: './plano-detalhe.html',
  styleUrl: './plano-detalhe.css',
})
export class PlanoDetalheComponent {
  private readonly route = inject(ActivatedRoute);
  readonly plano = PLANOS_LEITURA.find(
    (item) => item.id === this.route.snapshot.paramMap.get('id'),
  );
}
