import { ComboLivro, Livro } from './combo-livro';

const cover = (isbn: string): string => `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;

export const COMBOS_LIVROS: ComboLivro[] = [
  {
    id: 'financas',
    titulo: 'Finanças para aprender a ganhar dinheiro',
    descricao: 'Leituras para compreender dinheiro, investir com consciência e construir prosperidade.',
    imagens: [cover('9781612680194'), cover('8595080801'), cover('9896945314')],
  },
  {
    id: 'filosofia-ateus',
    titulo: 'Filosofia para ateus',
    descricao: 'Ideias e argumentos para explorar o pensamento secular, a ética e o sentido da vida.',
    imagens: [cover('8552100665'), cover('8535914560'), cover('9780679731184')],
  },
  {
    id: 'filosofia-fe',
    titulo: 'Filosofia para crer em Deus',
    descricao: 'Autores que investigam fé, razão e as grandes questões sobre a existência.',
    imagens: [cover('8578601777'), cover('8573678518'), cover('9780199552730')],
  },
  {
    id: 'habitos',
    titulo: 'Hábitos para uma vida com propósito',
    descricao: 'Um conjunto de livros sobre escolhas, atenção e mudanças duradouras.',
    imagens: [cover('8550807567'), cover('8539004119'), cover('9781501124020')],
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
      linkAfiliado: 'https://www.amazon.com.br/Homem-Mais-Rico-Babil%C3%B4nia/dp/8595081530?dib=eyJ2IjoiMSJ9.vr3cqICSg2vvyClkSpjR6b1tB42J2ZMjUtGH0u9v0_cImPJib9SsAezIOHQzbk1oIUJntn9K6cUdzt-8Yr9nwICjdz1QL4a-U_z8Up9Rkb5n8U9XNae1M59ZmBVT_FE_rSYRDsHKnNWGxXxd79T79hTMI7m0QICNELxoeVGmGcJjgwcjPgMW5BLuNQ_xu5Ggj6iiDERSljDGzATiLCBPWu1DfKAdRkvFAipQ2tFraSPHNZUCm5K6WpiDg9ySaajSk9pTjQYnz4cwWCNonpzLzJYvBQs8YaWH37bnBWdNqf4.ZBENQzPz1R8c9vWnfqU6WYPhg1Ca5rXi1oTTlwxrp8s&dib_tag=se&keywords=O+homem+mais+rico+da+Babilonia+George+Clason&qid=1793185191&sr=8-1&linkCode=ll2&tag=giordano06c-20&linkId=386eaf13ca973ea13102945227bfa16e&ref_=as_li_ss_tl',
    },
    {
      id: 'o-investidor-inteligente',
      titulo: 'O investidor inteligente',
      autor: 'Benjamin Graham',
      resumo: 'Considerado um clássico sobre investimentos, o livro diferencia investimento consciente de especulação e propõe uma abordagem disciplinada para analisar riscos. A edição comentada aproxima os conceitos de Graham do investidor contemporâneo, com explicações e exemplos.',
      imagemCapa: 'https://m.media-amazon.com/images/P/8595080801.01._SCLZZZZZZZ_.jpg',
      linkAfiliado: 'https://www.amazon.com.br/investidor-inteligente-Lourdes-Sette/dp/8595080801?dib=eyJ2IjoiMSJ9.CpFf0LVDE8lZ4w6J78boPMNGoKbqjgJ_z-na_bus7R4tZWLbFHT9bk7dnI8je4vViRcqmkbKdrB2gMw1Z7xCheDN_unjkHo6BSCuDGOydtokFWAHES6S5uOah3qxGt8lR34BVd50EhGo8eUMSpC_5xePfzdP51hN3UEhRrqUtQquHFSqs6yHbAsbRcFerR8hauKOVwLJ0lz3aVMV_yhKXQXG9l5e5rDFP-XLfIhQAttdt9i9Or-JYRCDQRqg_gqqnCzfiQ9aZ5dz_24iQKLZDDI-noZM8-OaZhQ7tUuUsh8.TeUPNRstl-N3a3gfAUg5CfjDLOUJW0r4dpR8wQzp7YU&dib_tag=se&keywords=O+investidor+inteligente+Benjamin+Graham&qid=1793185862&sr=8-1&ufe=app_do%3Aamzn1.fos.2fb4d624-b7be-441e-af6d-3c953cfae5bf&linkCode=ll2&tag=giordano06c-20&linkId=86c837e4d4d262d919f651e2e5069b07&ref_=as_li_ss_tl',
    },
    {
      id: 'dinheiro-ou-mente',
      titulo: 'Dinheiro: a vida ou a liberdade financeira',
      autor: 'Vicki Robin e Joe Dominguez',
      resumo: 'A obra propõe repensar a relação entre dinheiro, trabalho e tempo. Com exercícios de acompanhamento financeiro e reflexão sobre prioridades, ajuda o leitor a tomar decisões mais alinhadas ao estilo de vida que deseja construir.',
      imagemCapa: 'https://m.media-amazon.com/images/P/9896945314.01._SCLZZZZZZZ_.jpg',
      linkAfiliado: 'https://www.amazon.com.br/dinheiro-vida-transformar-independ%C3%AAncia-financeira/dp/9896945314?&linkCode=ll2&tag=giordano06c-20&linkId=c85ca1954300c6506b4e57027821819b&ref_=as_li_ss_tl',
    },
  ],
  'filosofia-ateus': [
    {
      id: 'apologia-socrates',
      titulo: 'Apologia de Sócrates',
      autor: 'Platão',
      resumo: 'Neste diálogo, Platão reconstrói a defesa de Sócrates diante do tribunal ateniense. A obra apresenta o compromisso socrático com o exame da vida, a busca da verdade e a responsabilidade de questionar as próprias convicções.',
      imagemCapa: 'https://m.media-amazon.com/images/P/8552100665.01._SCLZZZZZZZ_.jpg',
      linkAfiliado: 'https://www.amazon.com.br/Apologia-S%C3%B3crates-Plat%C3%A3o/dp/8552100665?dib=eyJ2IjoiMSJ9.wqgJg2cayfYL1WePYSkxpWV_fwhRvo2fsWAq6FkTEtAvbjeQ5Stys4JpJay9YwlkAtuuXQuDgvVgoisY0Jq_tXXlyT8pWYGmz92ZAztu-JXJCBbNRr0K0m9PVV4f8vcOkWAHVqULgBEGB0Qu7YCsrQj2xtXTKitCIFkm2wn2wv5mGaWNmBSKHE5f6ZoroSVNsbJPwHOWJlGpf9Hpm6Frx_WutRFB381USiwmp0QYm1miK-k4D7-FfPplkKR90713qyu7JZ8tM91uUUWmjd_6b3imud8FOMBZbHt2bePk1HA.UuUVqyoowk9yRI-cNlaenrTWhI8gPMwha7fWt6CMhWg&dib_tag=se&keywords=Apologia+de+Socrates+Plat%C3%A3o&qid=1793186587&sr=8-1&linkCode=ll2&tag=giordano06c-20&linkId=4696f1d3e437f27c2fd5b9ea0cdb77a3&ref_=as_li_ss_tl',
    },
    {
      id: 'genealogia-moral',
      titulo: 'Genealogia da moral',
      autor: 'Friedrich Nietzsche',
      resumo: 'Nietzsche investiga como valores morais surgiram e se transformaram ao longo da história. Em vez de aceitar conceitos como dados, o filósofo pergunta quem os criou, em quais circunstâncias e a serviço de quais formas de vida.',
      imagemCapa: 'https://m.media-amazon.com/images/P/8535914560.01._SCLZZZZZZZ_.jpg',
      linkAfiliado: 'https://www.amazon.com.br/Genealogia-moral-Friedrich-Nietzsche/dp/8535914560?dib=eyJ2IjoiMSJ9.077SUnxxA34ekNgD-7Xlqi8PNoaiRz9f1Cusu82LGPkD68sqjVdPa5z8LgltlN_YMnoUEfgZUa0TXlaEswr5iC2HqBoym8xtlBPuDD2ynhPL9hzOt1iuuDguBFFQkhkmGF5oYLGgSn0rivyXKxdYX3l-rm-nSY12z3kjLi5BipCDQlt5kA06l-694-Bn19-ZFoSpw31rqIe8eHEmOW95j6mM2IhV9iXVZAVx9W_S7ykDXdoATmw1KGpzokuQZyMgo6tb0WToOJR8fFDcc0z87rLzTfR7jmtnZE4st0_PiHw.mMcm3e37JuD3JQwAqYQS_6YjAyVhQBGTtBAK1OhbSlo&dib_tag=se&keywords=Genealogia+da+moral+Nietzsche&qid=1793186635&sr=8-1&ufe=app_do%3Aamzn1.fos.2fb4d624-b7be-441e-af6d-3c953cfae5bf&linkCode=ll2&tag=giordano06c-20&linkId=1f808cb9284f97f43591955aa775de4c&ref_=as_li_ss_tl',
    },
  ],
  'filosofia-fe': [
    {
      id: 'mera-cristianismo',
      titulo: 'Cristianismo puro e simples',
      autor: 'C. S. Lewis',
      resumo: 'A partir de uma série de palestras, C. S. Lewis apresenta argumentos sobre moralidade e crença religiosa, conduzindo o leitor por questões fundamentais da tradição cristã. O texto é acessível e convida à reflexão, mesmo quando não se compartilham suas conclusões.',
      imagemCapa: 'https://m.media-amazon.com/images/P/8578601777.01._SCLZZZZZZZ_.jpg',
      linkAfiliado: 'https://www.amazon.com.br/gp/aw/d/8578601777?pd_rd_plhdr=t&hsa_cr_id=17842598901&qid=1793186798&sr=1-2-fec03104-6f11-4242-8f79-15fae2896f66&i=aps&aref=oN2hoCAkf9&_encoding=UTF8&pd_rd_w=7NFNW&content-id=amzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4%3Aamzn1.sym.6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_p=6cdfbb79-51ae-4c0d-8769-7c90679f83e4&pf_rd_r=NBZV7349K9J5EVZXBDPY&pd_rd_wg=wVl3s&pd_rd_r=3a60f4fd-da19-48b5-bdab-aece2d9e4cb5&linkCode=ll2&tag=giordano06c-20&linkId=cbc51ab4a8bab6a6423e1801fae5ddcf&ref_=as_li_ss_tl',
    },
    {
      id: 'problema-do-sofrimento',
      titulo: 'O problema do sofrimento',
      autor: 'C. S. Lewis',
      resumo: 'Lewis aborda uma das questões mais difíceis para a fé: a presença do sofrimento no mundo. Com raciocínio filosófico e exemplos cotidianos, discute liberdade, dor e as diferentes respostas que a tradição cristã oferece.',
      imagemCapa: 'https://m.media-amazon.com/images/P/8573678518.01._SCLZZZZZZZ_.jpg',
      linkAfiliado: 'https://www.amazon.com.br/Problema-do-Sofrimento-C-Lewis/dp/8573678518?dib=eyJ2IjoiMSJ9.M-Pfsh9JwESxOoJpwnJkOOuq5j6kGXQ6FMeqyCLst9UbfIsVM_YPkV9Q74Msg1GrWMVqU0i5cRtSQpTbusidwekAHADu6fcaEbD8pSXFpXC7Hxww5ZW_XqNRw32quKkDZzVl62IaqC_SDhL7Y8NWfjJPC8Vtv4_5ALXSacfoZ_kOq2G-dw3Z65Jwj6RXpKzFH21L1rswUlguD8RoRSURgQ.lU4jiUggEzzgbtjRonR2KswiKxy02Pj5jO0BOMksAe0&dib_tag=se&keywords=O+problema+do+sofrimento+CS+Lewis&qid=1793186897&sr=8-3&linkCode=ll2&tag=giordano06c-20&linkId=4285df90f9567a9511f362a4e35f2a90&ref_=as_li_ss_tl',
    },
  ],
  habitos: [
    {
      id: 'habitos-atomicos',
      titulo: 'Hábitos atômicos',
      autor: 'James Clear',
      resumo: 'James Clear explica como pequenas mudanças consistentes podem produzir resultados relevantes ao longo do tempo. O livro oferece ferramentas para tornar bons hábitos mais fáceis de iniciar e sustentar, além de ajudar a reduzir comportamentos que afastam o leitor de seus objetivos.',
      imagemCapa: 'https://m.media-amazon.com/images/P/8550807567.01._SCLZZZZZZZ_.jpg',
      linkAfiliado: 'https://www.amazon.com.br/H%C3%A1bitos-At%C3%B4micos-M%C3%A9todo-Comprovado-Livrar/dp/8550807567/ref=sr_1_2?dib=eyJ2IjoiMSJ9.dtZSSOa2g_QZAnppDxVNRCOyZlEHr2mVyDRqR8YCFLLtO0dA9P-hTXWJOHmfa3UJnWohFLE-HO5hGdpohei_gMymhPx_IWRaOnhbShXWSpnYFXWng2l0MLra1NTwuuKGRMpPegjXSYpvfP3aXhcjvKyLYjpGsCH406PLK37GPLW-6OYWjuoo8y3RKZZP1pNwzDxSmzb02T-jjIGYNM_jVEO9UsdicoSEm-r3MfKPG8XUACxlRTblwMejG8T1_Y5Usv7ErMKGD5RD6QJ8Qc7EdjtRTcFPjveAb2LDJT1bc3M.xcvvQw0eY8JTZLEVUZC_XjWb3xSAyjJ7f-TXT8VdKSs&dib_tag=se&keywords=H%C3%A1bitos+at%C3%B4micos+James+Clear&qid=1793186322&sr=8-1&ufe=app_do%3Aamzn1.fos.2fb4d624-b7be-441e-af6d-3c953cfae5bf',
    },
    {
      id: 'o-poder-do-habito',
      titulo: 'O poder do hábito',
      autor: 'Charles Duhigg',
      resumo: 'Com histórias e pesquisas, Charles Duhigg explora como hábitos funcionam em indivíduos, empresas e comunidades. A obra apresenta o ciclo do hábito e mostra como compreender seus elementos pode abrir espaço para mudanças deliberadas.',
      imagemCapa: 'https://m.media-amazon.com/images/P/8539004119.01._SCLZZZZZZZ_.jpg',
      linkAfiliado: 'https://www.amazon.com.br/poder-do-h%C3%A1bito-Charles-Duhigg/dp/8539004119?dib=eyJ2IjoiMSJ9.hX1QQOV92v2Y6VOz-J_6dQZzJZsyjfi7GdcKTUejamgBuTf3s4TQ6BXLYVZj6CjVsEI9NyBRcdT83CenkL3n_U4OIqGQcUKtmfYmXN2ZUp3J5KINIKvcOoeW5W-dRkE9KY_7rKZtvjQWDPBB4WWkTZ_p3JstAWMP3ndF0oHS5mhlWz8Oc9yQKDImzUGhyD10d4y2YgNdcWmXL9rf5ChgjibyPZOm5xVHZ3pH5xLKHt4oV59nZqGdCGbr1BYRbSwdxQaVjQ9gbsEzPIlGsH1H-d6yKnxHURuaFxRC6l-xXes.U05Rrq9_NIbFuDG5wcQOiwtQjkO78T6VXEvnzcd5PPY&dib_tag=se&keywords=O+poder+do+h%C3%A1bito+Charles+Duhigg&qid=1793186343&sr=8-1&linkCode=ll2&tag=giordano06c-20&linkId=4c2cb6483d7216c456c89ae03c535cb4&ref_=as_li_ss_tl',
    },
  ],
};
