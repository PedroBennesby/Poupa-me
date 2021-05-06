function soma() {
  let a = document.getElementById("valor1").value;
  let b = document.getElementById("valor2").value;

  let valoresInteiros1 = parseInt(a);
  let valoresInteiros2 = parseInt(b);

  let somaTotal = valoresInteiros1 + valoresInteiros2;

  document.getElementById("resultado").textContent = somaTotal;
}
