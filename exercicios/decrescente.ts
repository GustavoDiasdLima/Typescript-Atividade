/*
3. ORDENAÇÃO DECRESCENTE
   Ordene os elementos de um array de forma decrescente utilizando o método SORT do Array, passando uma arrow function como parâmetro.
   
   * Teste Unitário (3.1): Escreva um teste com o array ['carro', 'boneco', 'ave', 'lapis'].
*/

export const ordenarParoleDecrescente = (Parole: string[]) => { //constante que guarda a função que recebe Parole, array de string
   return Parole.sort((a, b) => b.localeCompare(a)); //retorna o array ordenado pelo método sort, invertido como parâmetro pro sort
   //localeCompare compara strings pela ordem alfabética
};

console.log(ordenarParoleDecrescente(['carro', 'boneco', 'ave', 'lapis'])) //[ 'lapis', 'carro', 'boneco', 'ave' ]
//npx tsx exercicios/decrescente.ts