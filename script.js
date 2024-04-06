let dataDeHoje = new Date();

// Pegar a data de nascimento
function calcularDiasParaAniversario() {
  let dataDeNascimento = new Date(
    document.getElementById("DataDoAniversario").value
  );

  // Zerar as horas
  dataDeHoje.setHours(0, 0, 0, 0);
  dataDeNascimento.setHours(0, 0, 0, 0);

  // Calcular a diferença em milissegundos
  let diferencaEmMilissegundos = dataDeNascimento - dataDeHoje;

  // Converter a diferença em dias
  let diasParaAniversario = Math.ceil(
    diferencaEmMilissegundos / (24 * 60 * 60 * 1000)
  );

  // Adicionar 1 para considerar que ainda falta um dia completo
  diasParaAniversario += 1;

  //exibir resultado
  if (diasParaAniversario > 0) {
    let resultado = document.getElementById("diasCalculados");
    resultado.textContent =
      "Faltam " + diasParaAniversario + " dias para essa data";
  } else if (diasParaAniversario === 0) {
    let resultado = document.getElementById("diasCalculados");
    resultado.textContent = "Essa data é hoje!";
  } else if (diasParaAniversario < 0) {
    let resultado = document.getElementById("diasCalculados");
    resultado.textContent =
      "Já se passaram " + Math.abs(diasParaAniversario) + " dias dessa data";
  } else {
    let resultado = document.getElementById("diasCalculados");
    resultado.textContent = "Coloque a data para calcular";
  }
}
