function number01() {
  const num = parseFloat(prompt("Digite um numero"));
  const value1 = 1;
  const value2 = 0;
  if (num < 0) {
    console.log(value2);
  } else if (num > 0) {
    console.log(value1);
  } else {
    console.log("informe dados válidos");
  }
}

number01();
