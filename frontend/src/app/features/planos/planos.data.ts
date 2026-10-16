import { PlanoLeitura } from './plano-leitura';

const planoRoute = (id: string): string => `/planos/${id}`;

export const PLANOS_LEITURA: PlanoLeitura[] = [
  {
    id: 'nao-ficcao-2026',
    titulo: 'Best nonfiction books of 2026',
    rota: planoRoute('nao-ficcao-2026'),
    imagens: [
      'https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9781501111105-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780812981605-M.jpg',
    ],
    links: [
      { label: 'Livros para ampliar seus horizontes', rota: planoRoute('nao-ficcao-2026') },
      { label: 'Autores contemporâneos', rota: planoRoute('nao-ficcao-2026') },
      { label: 'Leituras para começar', rota: planoRoute('nao-ficcao-2026') },
    ],
  },
  {
    id: 'filosofia-essencial',
    titulo: 'Filosofia essencial para iniciantes',
    rota: planoRoute('filosofia-essencial'),
    imagens: [
      'https://covers.openlibrary.org/b/isbn/9780140449334-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780140449266-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780679720201-M.jpg',
    ],
    links: [
      { label: 'Pensadores clássicos', rota: planoRoute('filosofia-essencial') },
      { label: 'Ética e vida cotidiana', rota: planoRoute('filosofia-essencial') },
      { label: 'Filosofia em poucas páginas', rota: planoRoute('filosofia-essencial') },
    ],
  },
  {
    id: 'habitos-e-foco',
    titulo: 'Hábitos, foco e criatividade',
    rota: planoRoute('habitos-e-foco'),
    imagens: [
      'https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780525536512-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9781501124020-M.jpg',
    ],
    links: [
      { label: 'Construa hábitos melhores', rota: planoRoute('habitos-e-foco') },
      { label: 'Aprenda a trabalhar com foco', rota: planoRoute('habitos-e-foco') },
      { label: 'Desperte sua criatividade', rota: planoRoute('habitos-e-foco') },
    ],
  },
  {
    id: 'literatura-brasileira',
    titulo: 'Clássicos da literatura brasileira',
    rota: planoRoute('literatura-brasileira'),
    imagens: [
      'https://covers.openlibrary.org/b/isbn/9788573261132-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9788525406958-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9788535902778-M.jpg',
    ],
    links: [
      { label: 'Romances para conhecer', rota: planoRoute('literatura-brasileira') },
      { label: 'Grandes autores brasileiros', rota: planoRoute('literatura-brasileira') },
      { label: 'Contos e crônicas', rota: planoRoute('literatura-brasileira') },
    ],
  },
  {
    id: 'ciencia-e-universo',
    titulo: 'Ciência, natureza e universo',
    rota: planoRoute('ciencia-e-universo'),
    imagens: [
      'https://covers.openlibrary.org/b/isbn/9780307885159-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780393609394-M.jpg',
      'https://covers.openlibrary.org/b/isbn/9780345539434-M.jpg',
    ],
    links: [
      { label: 'Ideias que mudaram a ciência', rota: planoRoute('ciencia-e-universo') },
      { label: 'Uma viagem pelo cosmos', rota: planoRoute('ciencia-e-universo') },
      { label: 'A natureza ao nosso redor', rota: planoRoute('ciencia-e-universo') },
    ],
  },
];
