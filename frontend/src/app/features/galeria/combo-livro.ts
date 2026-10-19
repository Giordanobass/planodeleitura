export interface ComboLivro {
  id: string;
  titulo: string;
  descricao: string;
  imagens: string[];
}

export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  resumo: string;
  imagemCapa: string;
  linkAfiliado: string;
}
