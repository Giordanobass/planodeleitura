import { Component } from '@angular/core';

interface Colaborador {
  nome: string;
  foto: string;
  bio: string;
}

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class SobreComponent {
  readonly colaboradores: Colaborador[] = [
    {
      nome: 'Ana Martins',
      foto: 'https://placehold.co/160x160/E8E2D9/2C2C2C?text=AM',
      bio: 'Leitora curiosa e pesquisadora de educação, sugere livros que aproximam ideias complexas do cotidiano.',
    },
    {
      nome: 'Rafael Costa',
      foto: 'https://placehold.co/160x160/E8E2D9/2C2C2C?text=RC',
      bio: 'Entusiasta de filosofia e história, ajuda a criar percursos de leitura para quem quer pensar por novas perspectivas.',
    },
    {
      nome: 'Marina Oliveira',
      foto: 'https://placehold.co/160x160/E8E2D9/2C2C2C?text=MO',
      bio: 'Editora e leitora de ficção, contribui com recomendações que celebram diferentes vozes e experiências.',
    },
  ];
}
