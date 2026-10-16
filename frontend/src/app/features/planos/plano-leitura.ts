export interface PlanoLeituraLink {
  label: string;
  rota: string;
}

export interface PlanoLeitura {
  id: string;
  titulo: string;
  rota: string;
  imagens: string[];
  links: PlanoLeituraLink[];
}
