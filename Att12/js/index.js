

let frase1 = "Não sou eu!!";
let frase2 = "Eu tentei ajudar desde o início!!"
let frase3 = "Já  pensou que o monstro pode ser  controlado"


console.log(
    "Frase 1  tem " + frase1.length + " caracteres",
  );
  console.log(
    "Frase 2  tem " + frase2.length + " caracteres",
  );

  console.log(
    "Frase 3  tem " + frase3.length + " caracteres",
  );
  
frase1 = parseInt(frase1);
frase2 = parseInt(frase2);
frase3 = parseInt(frase3);

if(frase1 > frase2 && frase3){
    console.log(" Frase 1 é o culpado")
}else if(frase2 > frase1 && frase3) {
    console.log(" Frase 2 é o culpado")
}else{
    console.log("Frase 3 é o culpado")
}