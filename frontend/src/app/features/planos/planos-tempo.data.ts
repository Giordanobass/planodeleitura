import { PlanoTempo } from './plano-tempo';

export const PLANOS_TEMPO: PlanoTempo[] = [
  {
    id: 'meia-hora',
    titulo: 'Leitura para quem tem 30 min por dia',
    tempoDiario: '30 min por dia',
    descricao: 'Avance um capítulo ou algumas páginas por dia e construa um ritmo constante sem sobrecarregar a rotina.',
  },
  {
    id: 'fim-de-semana',
    titulo: 'Leitura de fim de semana',
    tempoDiario: '2 horas no fim de semana',
    descricao: 'Reserve um período tranquilo no sábado ou domingo para mergulhar em uma leitura mais longa.',
  },
  {
    id: 'maratona-sete-dias',
    titulo: 'Maratona de leitura em 7 dias',
    tempoDiario: '45 min por dia',
    descricao: 'Um percurso curto e intensivo, com metas diárias simples para terminar um livro ao longo de uma semana.',
  },
];
