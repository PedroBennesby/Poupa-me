function calcSalario() {
  let salbruto = document.getElementById("salario-bruto").value;

  let valorInteiro = parseFloat(salbruto);

  let aliVarInss = 0;
  let parcDeduzirinss = 0;
  let descInss = 0;
  let salLiquido = 0;

  if (valorInteiro <= 1100) {
    aliVarInss = 7.5;
  } else if (valorInteiro > 1100 && valorInteiro <= 2203.48) {
    aliVarInss = 9;
    parcDeduzirinss = 16.5;
  } else if (valorInteiro > 2203.48 && valorInteiro <= 3305.22) {
    aliVarInss = 12;
    parcDeduzirinss = 82.61;
  } else if (valorInteiro > 3305.22 && valorInteiro <= 6433.47) {
    aliVarInss = 14;
    parcDeduzirinss = 148.72;
  } else {
    aliVarInss = 751.99;
  }

  let calcBaseIrrf = valorInteiro - aliVarInss;

  if (valorInteiro <= 6433.47) {
    descInss = (valorInteiro / 100) * aliVarInss - parcDeduzirinss;
    salLiquido = valorInteiro - descInss;
  } else {
    salLiquido = valorInteiro - aliVarInss;
  }

  document.getElementById("resultado").textContent = salLiquido;
}
