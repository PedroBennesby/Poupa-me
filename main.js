function calcSalario() {
  let salbruto = document.getElementById('salario-bruto').value;

  let valorInteiro = parseFloat(salbruto);

  let aliVarInss = 0;
  let parcDeduzirinss = 0;
  let descInss = 0;
  let salPosInss = 0;

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

  let aliVarIrrf = 0;
  let parcDeduzirIrrf = 0;
  let salLiquido = 0;
  let calcIrrf = 0;

  if (valorInteiro <= 6433.47) {
    descInss = (valorInteiro / 100) * aliVarInss - parcDeduzirinss;
    salPosInss = valorInteiro - descInss;
  } else {
    salPosInss = valorInteiro - aliVarInss;
  }

  if (salPosInss <= 1903.98) {
    aliVarIrrf = 0;
  } else if (salPosInss >= 1903.99 && salPosInss <= 2826.65) {
    aliVarIrrf = 7.5;
    parcDeduzirIrrf = 142.8;
  } else if (salPosInss >= 2826.66 && salPosInss <= 3751.05) {
    aliVarIrff = 15;
    parcDeduzirIrrf = 354.8;
  } else if (salPosInss >= 3751.06 && salPosInss <= 4664.68) {
    aliVarIrrf = 22.5;
    parcDeduzirIrrf = 636.13;
  } else {
    aliVarIrrf = 27.5;
    parcDeduzirIrrf = 869.36;
  }

  calcIrrf = (salPosInss / 100) * aliVarIrrf - parcDeduzirIrrf;
  salLiquido = salPosInss - calcIrrf;

  document.getElementById('resultado').textContent = salLiquido;
}
