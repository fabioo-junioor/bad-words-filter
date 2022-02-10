// Importar dependências
const Filter = require("bad-words");
// Cria um novo filtro
const filter = new Filter();
// Adiciona palavras extras à lista de palavrões
const words = require("./extra-words.json");

filter.addWords(...words);
filter.addWords("news");

// Testa o filtro de palavrões
console.log(filter.clean("Don't be an ash0le"));
console.log(filter.clean("You fucking mother fucker"));
console.log(filter.clean("You are a son of a whore"));
console.log(filter.clean("You fucking fucknut"));
console.log(filter.clean("fucking cunt"));
console.log(filter.clean("You are a shit ass"));
console.log(filter.clean("This fucking product is unbelievable"));
console.log(filter.clean("You are a bitch"));
console.log(filter.clean("africa carros"));

console.log(filter.clean("news"));