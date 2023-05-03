let num = prompt("Enter a Number: ");
let gun = 1;
let sum = 0;
let symbol = prompt("Enter Symbol: ");
for (let i = 1; i < num; i++){
  gun *= i;
}
for (let j = 0; j < num; j++){
  sum += j;
}
if (symbol == "+") {
  document.write(sum);
} else if(symbol == "*"){
  document.write(gun);
} else{document.write("Incorrect! Symbol. ")}

  
  


