let numero=5;
let fatorial =  1;
for (let index = numero; index > 0; index--) {
   fatorial *= index;
   console.log(index, fatorial);   
}

console.log("Fatorial de ", numero," é :",fatorial);