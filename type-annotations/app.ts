/*
Type Annotations, ou Anotações de Tipo, indicam o tipo de um dado.
Não é obrigatório o uso no TypeScript, mas como a linguagem é tipada, é recomendado o uso.

Sintaxe:
let nomeVariavel: TypeAnnotation = valor;
Exemplo: let nome: string = 'Matheus';
*/

function soma(n1: number, n2: number) {
  return n1 + n2;
}

const numero1: number = 3;
const numero2: number = 6;

console.log(soma(numero1, numero2));