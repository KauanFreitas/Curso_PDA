
// Estrutura de repetição com For 
function imprimirFor() {
    for (var x = 0; x <= 10; x++)
    document.write(`<h1>${x}</h1>`)
}

imprimirFor();



// EXPLICAÇÂO DA AULA

// //Estrutura de Repetição com While
// let y = 0;

// while (y <= 10){
//     document.write(`<h1>${y}</h1>`);
//     y++;
// }


// let users = [
//     { nome: "Bia", idade: 23},
//     { nome: "Dan", idade: 26 },
//     { nome: "Diego", idade: 16 },
//     { nome: "Roberta", idade: 16 }
// ];

// let perfumes = [
//     { nomePerfume: "miss-dior", imagem: "miss-dior.png" },
//     { nomePerfume: "prada", imagem: "prada.png" },
//     { nomePerfume: "essencial", imagem: "essencial.png" }
// ];

// let menu = [
//     "sobre mim",
//     "home",
//     "contatos",
//     "produtos"
// ]

// // for -> percorrer 
// for(var i = 0; i < menu.length; i++){
//     document.write(`<li>${menu[i]}<li>`)
//     percorrerPerfumes();
// }

// function percorrerPerfumes(){
//     for(var i = 0; i < perfumes.length; i++){
//         document.write(`<h1>${perfumes[i].nomePerfume}</h1> <br>
//         <img src="${perfumes[i].imagem}">
//         `)
//         //i++
//     }
// }
// //    criar variavel ; condicao ;
// //    condicao === true { bloco de codigo} 
// //    acrescentar +1 no i



// // lacos de repeticao 
// // estrutra de controle que repetem uma acao

// // estruturas de controle 
// // ifelse -> condicao
// // while -> ENQUANTO a condicao for verdadeira faca algo
// // do while -> 
// // for ->  


// // enquanto counter for menor ou igual ao tamanho total
// // do array de users acessar o html e escrever os nomes 
// // dos usuarios na tela
// // counter = 0 
// //      0     <     4 -> true
// // users[0].nome
// let counter = 0;
// // 3
// // 4
// // enquanto (condicao) { acao a ser executada }
// // 
// // faca enquanto
// // do{
// //     document.write(users[counter].nome);
// //     counter++;
// // }  while(counter <= users.length);

// //    variavel de controle ; condicao ; acrescimo 

// // for(var i = 0; i <= users.length; i++){
// //     document.write(users[i].nome + " " + users[i].idade, "<br>");
// // }

// // while(counter <= users.length){
// //     document.write(users[counter].nome + " " + users[counter].idade, "<br>");
// //     counter++
// // }

// // function showUsers(numero){
// //     document.write(users[numero].nome, "<br>");
// // }

// // showUsers(0);
// // showUsers(1);
// // showUsers(2);
// // showUsers(3);