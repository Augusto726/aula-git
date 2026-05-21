//Lista de exemplos de arrays

//Criando um array
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas); // Output: ["maca", "banana", "laranja"]

//criando array de numeros
let numeros = [1, 2, 3, 4, 5];
console.log(numeros); //output: [1, 2, 3, 4, 5]

//acessando elementos da array

let carros = ["gol", "fusca", "palio"];

console.log(carros[1]);

//alterando elementos da array

let cores = ["amarelo", "vermelho", "verde"];
cores[1] = "roxo";
console.log(cores[1]);

//descobrindo tamanho da array
let animais = ["gato", "cachorro", "tatu", "macaco", "hamster"];
console.log(animais.length);

//adicionando elementos ao final da array com push()

let paises = ["Brasil", "Portugual", "Italia"];
paises.push("Marrocos");
console.log(paises);

//removendo o ultimo elemento do array com pop()

let cidades = ["São Paulo", "Rio de Janeiro", "Santa catarina"];
cidades.pop();
console.log(cidades);

//adicionando o primeiro elemento do array com unshift()
let coresprimarias = ["vermelho", "verde"];
coresprimarias.unshift("azul");
console.log(coresprimarias);

//removendo o primeiro elemento da array com shift()

let frutascitricas = ["limão", "tangerina", "laranja"];
frutascitricas.shift();
console.log(frutascitricas);
