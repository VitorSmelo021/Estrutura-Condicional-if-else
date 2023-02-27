let celsius = prompt("Digite a temperatura em graus Celsius");

let fahrenheit = (celsius *9/5) + 32;

console.log(celsius + " graus Celsius é igual a"  + fahrenheit +  " graus em fahrenheit"); 

document.getElementById('info').innerHTML = celsius + " graus Celsius é igual a "  + fahrenheit +  " graus em fahrenheit";