let nome = prompt("Digite seu nome:");

let genero = prompt("Digite seu gênero: , Ex: M ou F");

let idade = parseInt(prompt("Digite sua idade :"));

let tempo = parseInt(prompt("Digite seu tempo de contribuição na empresa :"));

if (genero == "F" || genero == "f" && idade >= 0){
if ( idade >= 61 && tempo >= 15){
document.getElementById('info').innerHTML = nome + ", você já pode se aposentar";}
else { ( document.getElementById('info').innerHTML = nome + ", você não pode se aposentar")}
}

else if(genero == "M" || genero == "m" && idade >= 0 ){
if (idade >= 65 && tempo >= 15){
document.getElementById('info').innerHTML = nome + ", você já pode se aposentar";}
else { ( document.getElementById('info').innerHTML = nome + ", você não pode se aposentar")
}
}
else {
    document.getElementById('info').innerHTML = nome + " ,Por Favor Informe dados válidos";
}