let salario = prompt("Digite seu salario:");
let nome = prompt("Digite seu nome:");

if(salario < 500){
    salarioR = salario *1.30
    document.getElementById('info').innerHTML = nome + " seu salário foi reajustado agora é : " + salarioR;
;}
else{
    document.getElementById('info').innerHTML = nome + " seu salário não sofreu reajuste então continua sendo " + salario;
;}