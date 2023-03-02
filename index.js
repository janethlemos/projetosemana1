const prompt = require('prompt-sync')();
var salarios = [];
var soma = 0;
var media;
var qtd_menores;

for (var i = 1; i <= 5; i++) {
  console.log("Pessoa", i);

  var nome = prompt('Digite seu nome:');
  var salario_bruto = parseFloat(prompt('Digite seu salário bruto:'));
  var dependentes = parseInt(prompt("Digite o numero de dependentes:"));

  for (var j = 1; j <= dependentes; j++) {
    var ganho = parseFloat(prompt('Digite seu ganho mensal:'));
    salario_bruto = salario_bruto + ganho;

  }
  var renda_percapta = salario_bruto / (dependentes + 1);
  var ir = calcularIr(salario_bruto, renda_percapta);

  var salario_liquido = salario_bruto - ir;
  console.log("Sálário líquido é R$", salario_liquido, "\n");

  salarios.push[salario_liquido];
  soma = soma + salario_liquido;
}
media = soma / 5;

qtd_menores = calcularQtdMenores(salarios, media);

console.log("A media dos salarios liquidos e:", media);
console.log("A quantidade de pessoas com salario liquido menor que a media e:", qtd_menores);

function calcularIr(salario_bruto, renda_percapta) {
  if (renda_percapta >= 500) {

    if (salario_bruto > 0 && salario_bruto <= 1903.98) {
      var ir = salario_bruto * 0.05;
    } else if (salario_bruto <= 2826.65) {
      var ir = salario_bruto * 0.075;
    } else {
      var ir = salario_bruto * 0.15;
    }
  } else {
    var ir = 0;
  }
  return ir;
}

function calcularQtdMenores(salarios, media) {
  var qtd_menores = 0;
  for (var i = 0; i <= 4; i++) {
    if (salarios[i] < media) {
      qtd_menores++;
    }
    return qtd_menores;
  }
}