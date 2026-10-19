import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { COMBOS_LIVROS, LIVROS_POR_COMBO } from './combos.data';
import { ComboLivro } from './combo-livro';
import { Livro } from './combo-livro';

@Component({
  selector: 'app-combo-detalhe',
  imports: [RouterLink],
  templateUrl: './combo-detalhe.html',
  styleUrl: './combo-detalhe.css',
})
export class ComboDetalheComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly comboId = this.route.snapshot.paramMap.get('id') ?? '';
  readonly combo: ComboLivro | undefined = COMBOS_LIVROS.find(
    (item) => item.id === this.comboId,
  );
  readonly livros: Livro[] = LIVROS_POR_COMBO[this.comboId] ?? [];
}
