Problema:
Considerando 5 pessoas:
Elabore um algoritmo para calcular o salario lìquido de uma pessoa.
Solicite ao usuario que digite seu nome e o valor de seu salario bruto.
Peça tambem, para o usuario digitar a quantidade de depedentes.
Para cada um dos dependentes deve ser solicitado o ganho mensal. Esse valor devera ser adicionado ao salario bruto.
Calcule a renda per capita.
Caso a renda para cada membro da familia seja menor que R$500,00 a pessoa ficara isenta de imposto de renda.
Caso a renda para cada membro da familia seja maior ou igual a R$500,00 o imposto de renda a ser descontado do salario bruto deve considerar as seguintes regras:
* salario bruto (de  0.00 ate  1903.98): 5%
* salario bruto (de 1903.99 ate 2826.65): 7,5%
* salario bruto (a partir de 2826.66): 15
Ao final, mostre na tela o valor do salario liquido.

Armazene os salarios liquidos em uma colecao indexada (array).
Depois calcule a media dos salarios liquidos e quantas pessoas estao abaixo desse valor medio.

Refatore seu código. Para isso, crie duas funções, a saber:
*Função para calcular IR: Essa função deve recerber como parametros o salario bruto e a renda per capita e retornar ao final o valor de IR;
* Função para calcular a quantidade de salarios liquidos menores que a media: esta função deve receber como parametros o array de salarios liquidos e medios dos salarios liquidos e retornar  a quantidade de salarios liquidos menores que a media;

Aula 12 - Funcoes.