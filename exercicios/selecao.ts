/*
4. EXTRAÇÃO DOS PRIMEIRA SELEÇÃO
   Leia o array e pegue apenas os dois primeiros elementos utilizando o método SLICE do Array.
   
   * Teste Unitário (4.1): Escreva um teste com o array [2, 4, 6, 2, 8, 9, 5].
*/
export const primeirosDue = (numeri: number[]) => { //constante primeirosDue (dois) recebe numeri(numeros) array de strings como parâmetro da função
    return numeri.slice(0, 2); //slice é usado para extrair uma parte do array, começa do indice 0 até o 2, mas nao pega o numero do indice 2.
};
