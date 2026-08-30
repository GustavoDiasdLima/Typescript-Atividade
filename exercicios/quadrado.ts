/*
1. ELEVAR ELEMENTOS AO QUADRADO
   Crie um programa que calcule o quadrado de cada elemento de um array utilizando duas estratégias:
   a) Iterando com "for" simples.
   b) Iterando com "forEach".
   
   * Teste Unitário (1.1): Escreva um teste com o array [3, 5, 7, 3, 8, 9, 1].
*/


export function quadrado1(numeros: number[]) { //declara função com parametro numeros do tipo array de numeros
   let resultado: number[] = []; // array que vai receber os resultados

   for (let indice = 0; indice < numeros.length; indice++) { //for simples começando do indice zero, se o indice for menor que o qtd de elem. do array, incrementa
      resultado.push(numeros[indice] * numeros[indice]);
   }
   return resultado; // retorna o array resultado
}

export function quadrado2(numeros: number[]) { //declara função com parametro o array numeros do tipo number
   let resultado: number[] = [];

   numeros.forEach((numero) => { // para cada elemento do array faça
      resultado.push(numero * numero); // adiciona no array resultado os quadrados dos numeros do array
   });
   return resultado; // retorna o resultado
}


let numeros = [3, 5, 7, 3, 8, 9, 1];

console.log("Resultado quadrado1:", quadrado1(numeros));
console.log("Resultado quadrado2:", quadrado2(numeros));

// let numeros = [3, 5, 7, 3, 8, 9, 1]// declara array numeros com 4 elementos
// for (let indice = 0; indice < numeros.length; indice++){ // for simples começando do indice zero, se o indice for menor que o qtd de elem. do array, incrementa
//    console.log(numeros[indice] * numeros[indice]);
// }

// let numeros2 = [3, 5, 7, 3, 8, 9, 1]
// numeros.forEach((numero) => {
//    console.log(numero * numero)
// })