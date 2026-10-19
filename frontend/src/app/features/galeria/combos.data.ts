import { ComboLivro, Livro } from './combo-livro';

const cover = (isbn: string): string => `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
const affiliateLink = (bookId: string): string =>
  `https://www.amazon.com.br/s?k=${encodeURIComponent(bookId)}`;

export const COMBOS_LIVROS: ComboLivro[] = [
  {
    id: 'financas',
    titulo: 'Finanças para aprender a ganhar dinheiro',
    descricao: 'Leituras para compreender dinheiro, investir com consciência e construir prosperidade.',
    imagens: [cover('9781612680194'), cover('9780857197689'), cover('9780062315007')],
  },
  {
    id: 'filosofia-ateus',
    titulo: 'Filosofia para ateus',
    descricao: 'Ideias e argumentos para explorar o pensamento secular, a ética e o sentido da vida.',
    imagens: [cover('9780140449334'), cover('9780199537822'), cover('9780679731184')],
  },
  {
    id: 'filosofia-fe',
    titulo: 'Filosofia para crer em Deus',
    descricao: 'Autores que investigam fé, razão e as grandes questões sobre a existência.',
    imagens: [cover('9780199559313'), cover('9780060652934'), cover('9780199552730')],
  },
  {
    id: 'habitos',
    titulo: 'Hábitos para uma vida com propósito',
    descricao: 'Um conjunto de livros sobre escolhas, atenção e mudanças duradouras.',
    imagens: [cover('9780735211292'), cover('9780525536512'), cover('9781501124020')],
  },
];

export const LIVROS_POR_COMBO: Record<string, Livro[]> = {
  financas: [
    {
      id: 'homem-mais-rico-babilonia',
      titulo: 'O homem mais rico da Babilônia',
      autor: 'George S. Clason',
      resumo: 'Por meio de parábolas ambientadas na antiga Babilônia, George S. Clason apresenta princípios práticos de educação financeira. O livro aborda o hábito de poupar, o cuidado ao investir e a importância de buscar conhecimento antes de tomar decisões com o próprio dinheiro.',
      imagemCapa: cover('9781612680194'),
      linkAfiliado: affiliateLink('O homem mais rico da Babilonia George Clason'),
    },
    {
      id: 'o-investidor-inteligente',
      titulo: 'O investidor inteligente',
      autor: 'Benjamin Graham',
      resumo: 'Considerado um clássico sobre investimentos, o livro diferencia investimento consciente de especulação e propõe uma abordagem disciplinada para analisar riscos. A edição comentada aproxima os conceitos de Graham do investidor contemporâneo, com explicações e exemplos.',
      imagemCapa: cover('9780062315007'),
      linkAfiliado: affiliateLink('O investidor inteligente Benjamin Graham'),
    },
    {
      id: 'dinheiro-ou-mente',
      titulo: 'Your Money or Your Life',
      autor: 'Vicki Robin e Joe Dominguez',
      resumo: 'A obra propõe repensar a relação entre dinheiro, trabalho e tempo. Com exercícios de acompanhamento financeiro e reflexão sobre prioridades, ajuda o leitor a tomar decisões mais alinhadas ao estilo de vida que deseja construir.',
      imagemCapa: cover('9780143115762'),
      linkAfiliado: affiliateLink('Your Money or Your Life Vicki Robin'),
    },
  ],
  'filosofia-ateus': [
    {
      id: 'apologia-socrates',
      titulo: 'Apologia de Sócrates',
      autor: 'Platão',
      resumo: 'Neste diálogo, Platão reconstrói a defesa de Sócrates diante do tribunal ateniense. A obra apresenta o compromisso socrático com o exame da vida, a busca da verdade e a responsabilidade de questionar as próprias convicções.',
      imagemCapa: cover('9780140449334'),
      linkAfiliado: affiliateLink('Apologia de Socrates Platão'),
    },
    {
      id: 'genealogia-moral',
      titulo: 'Genealogia da moral',
      autor: 'Friedrich Nietzsche',
      resumo: 'Nietzsche investiga como valores morais surgiram e se transformaram ao longo da história. Em vez de aceitar conceitos como dados, o filósofo pergunta quem os criou, em quais circunstâncias e a serviço de quais formas de vida.',
      imagemCapa: cover('9780199537822'),
      linkAfiliado: affiliateLink('Genealogia da moral Nietzsche'),
    },
  ],
  'filosofia-fe': [
    {
      id: 'mera-cristianismo',
      titulo: 'Cristianismo puro e simples',
      autor: 'C. S. Lewis',
      resumo: 'A partir de uma série de palestras, C. S. Lewis apresenta argumentos sobre moralidade e crença religiosa, conduzindo o leitor por questões fundamentais da tradição cristã. O texto é acessível e convida à reflexão, mesmo quando não se compartilham suas conclusões.',
      imagemCapa: cover('9780060652934'),
      linkAfiliado: affiliateLink('Cristianismo puro e simples CS Lewis'),
    },
    {
      id: 'problema-do-sofrimento',
      titulo: 'O problema do sofrimento',
      autor: 'C. S. Lewis',
      resumo: 'Lewis aborda uma das questões mais difíceis para a fé: a presença do sofrimento no mundo. Com raciocínio filosófico e exemplos cotidianos, discute liberdade, dor e as diferentes respostas que a tradição cristã oferece.',
      imagemCapa: cover('9780199559313'),
      linkAfiliado: affiliateLink('O problema do sofrimento CS Lewis'),
    },
  ],
  habitos: [
    {
      id: 'habitos-atomicos',
      titulo: 'Hábitos atômicos',
      autor: 'James Clear',
      resumo: 'James Clear explica como pequenas mudanças consistentes podem produzir resultados relevantes ao longo do tempo. O livro oferece ferramentas para tornar bons hábitos mais fáceis de iniciar e sustentar, além de ajudar a reduzir comportamentos que afastam o leitor de seus objetivos.',
      imagemCapa: cover('9780735211292'),
      linkAfiliado: affiliateLink('Hábitos atômicos James Clear'),
    },
    {
      id: 'o-poder-do-habito',
      titulo: 'O poder do hábito',
      autor: 'Charles Duhigg',
      resumo: 'Com histórias e pesquisas, Charles Duhigg explora como hábitos funcionam em indivíduos, empresas e comunidades. A obra apresenta o ciclo do hábito e mostra como compreender seus elementos pode abrir espaço para mudanças deliberadas.',
      imagemCapa: cover('9780812981605'),
      linkAfiliado: affiliateLink('O poder do hábito Charles Duhigg'),
    },
  ],
};
