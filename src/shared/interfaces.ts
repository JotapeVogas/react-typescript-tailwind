export interface IColaborador {
  id: number;
  nome: string;
  cargo: string;
  imagem: string;
  time: string;
  email?: string;
  data_admissao?: string;
}

export interface ITime {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
}