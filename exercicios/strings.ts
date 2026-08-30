/*
2. CONCATENAÇÃO DE STRINGS
   Transforme o array concatenando as strings com 1 (um) espaço (" "). Utilize o método JOIN do Array, passando uma arrow function como parâmetro.
   
   * Teste Unitário (2.1): Escreva um teste com o array ['Arrays', 'com', 'TypeScript'].
*/
let nome = "Gustavo";
let sobrenome = "Dias"
let nomeCompleto = nome + " " + sobrenome; //Concatenação de strings
console.log(nomeCompleto)

//rodar no terminal =  npx tsx exercicios/strings.ts

let ArrayParole = ['Arrays', 'com', 'TypeScript'] // cria array de palavras(Parole)

let resultado = ArrayParole.join(" ");// variavel resultado recebe o resultado do Parole com o método join(" ")
console.log(resultado) // Arrays com TypeScript

let Parole = ['Arrays', 'com', 'TypeScript']

export const concatenar = (Parole: string[]) => { //constante concatenar recebe arrow function Parole tipo array de string
    return Parole.join(" "); //retorna o array de string parole com o método join(" ") concatenando com o espaço as palavras
};
console.log(concatenar(['Arrays', 'com', 'TypeScript'])); //Arrays com TypeScript

