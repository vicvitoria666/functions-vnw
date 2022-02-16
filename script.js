
//1 - crie uma função que exiba uma mensagem no console

function homerSimpson () {
    console.log('Não somos loucos, apenas vivemos num mundo onde não vale a pena ser normal')
}
homerSimpson()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function name (userName) {
console.log(userName)
} name('Vitória')

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function me (userName, age, musicTaste) {
   console.log(`I'm ${userName}, I'm ${age}, and I'm used to listen ${musicTaste} because I have always being in love with english`) 
} me('Vitória', 20, 'old rock and blues')

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function ownTaste (favMovie, favMusic) {
    console.log(`My favorite movie is ${favMovie} by Quentin Tarantino, he has an incredible away to write and express things, my favorite song is ${favMusic}, very nostalgic to me, reminds me about my favorite kind of mood when I feel like dangerous haha`)
} ownTaste ('Pulp Fiction', 'Do I wanna know? - Arctic Monkeys')

//*Bônus

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function numbers (num) {
    //return(num *3)
    console.log(num * 3)
} numbers(125)
