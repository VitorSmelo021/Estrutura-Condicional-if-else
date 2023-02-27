let altura = prompt("Digite sua altura:");
let peso = prompt("Digite o seu peso");
let nome = prompt("Digite seu nome:");

let imc = parseFloat(peso / (altura*altura)) ;

if (imc >= 0){
    if(imc <= 18.4){
        document.getElementById('info').innerHTML = nome + " seu Indice de massa corporal é" + " magreza";
    }
    else if(imc >= 18.5 && imc <=24.9){
        document.getElementById('info').innerHTML = nome + " seu Indice de massa corporal é " + " Normal";
    }
    else if(imc >= 25.0 && imc <=29.9){
        document.getElementById('info').innerHTML = nome + " seu Indice de massa corporal é " + " Sobrepeso";
    }
    else if(imc >= 30.0 && imc <=39.9){
        document.getElementById('info').innerHTML = nome + " seu Indice de massa corporal é " + " Obesidade";
    }
    else if(imc >=40.0){
        document.getElementById('info').innerHTML = nome + " seu Indice de massa corporal é " + " Obesidade Grave";
    }
 
}
else {
    document.getElementById('info').innerHTML = imc + " ,Por Favor Informe dados válidos";
}