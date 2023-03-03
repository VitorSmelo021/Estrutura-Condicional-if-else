let nota1 = parseFloat(prompt("digite a primeira nota"));
let nota2 = parseFloat(prompt("digite a segunda nota"));
let nota3 = parseFloat(prompt("digite a terceira nota"));
let Media = prompt("Escolha A para Media aritmetrica e P para media por peso");
if (Media == "A" || Media == "a") {
  let mediaA;
  mediaA = (nota1 + nota2 + nota3) / 3;

  document.getElementById(
    "info"
  ).innerHTML = `Sua nota aritmetica foi: ${mediaA}`;
  console.log(`Sua nota aritmetica foi: ${mediaA}`);
} else if (Media == "P" || Media == "p") {
  let mediaP;
  mediaP = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;

  document.getElementById(
    "info"
  ).innerHTML = `Sua nota por peso foi: ${mediaP}`;
  console.log(`Sua nota por peso foi: ${mediaP} `);
} else {
    document.getElementById(
        "info"
      ).innerHTML = 'informe dados válidos';}

