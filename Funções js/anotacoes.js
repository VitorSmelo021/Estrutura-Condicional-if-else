//função simples

// function nomeDaFuncao(number01, number02) {
//     console.log(number01, number02)
// }
// nomeDaFuncao(1 ,2);

//---------------------------------------------------------------------//

//função anônima - São aquelas que não tem nome.
// const description = function(text){
//     console.log(text)
// }
// description('função anônima!!');

//------------------------------------------------------------------------//

// function returnValue(value1 , value2) {
//     const sum = value1 + value2;

//     console.log(sum);
//     return sum;
// }
// returnValue(4, 6);

//-----------------------------------------------------------------------//

//Arrow function
// const newFunction = (name) => {
//     console.log(name);
// }
// console.log(newFunction('Arrow function here!'));

//------------------------------------------------------------------------//

//Callback
// Uma callback é uma função que está sendo passada para outra como parâmetro

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("callback aqui");
});
