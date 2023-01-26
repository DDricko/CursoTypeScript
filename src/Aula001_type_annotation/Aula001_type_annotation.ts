/* eslint-disable*/

//Tipos básicos (aqui ocorre inferência de tipos)
const nome: string = 'rodrigo';
const idade: number = 27;
const adulto: boolean = true;
const simbol: symbol = Symbol('qualquer-symbol');

//Arrays
let arrayDeNumeros: Array<number> = [0, 1, 2, 3];
let arrayDeNomes: Array<string> = ['Teste1', 'Eu', 'ETC'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = { // o "?" informa que o valor é opcional
  idade: 27,
  nome: 'Rodrigo'
};

//Funções
function soma(x: number, y: number) { // inferência de tipos
    return x + y
}
const result = soma(1, 3);

const soma2: (x: number, y: number) => number = (x, y) => x + y;


