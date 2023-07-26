import Item from '../models/item';

// Criando dados e utilizando a tipagem criada
const dados: Item[] = [
  {
    titulo: 'JSON x XML',
    resumo: 'O duelo de dois modelos de representação de informações',
    ano: 2020,
    genero: ['aventura', 'acao', 'ficcao'],
  },
  {
    titulo: 'JSON James',
    resumo: 'a história de uma lenda do velho oeste',
    ano: 2022,
    genero: ['acao'],
  },
];

export default dados;
