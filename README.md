# 🧮 Calculadora de IMC

Aplicação web desenvolvida em **React + TypeScript** para calcular o Índice de Massa Corporal (IMC) a partir da altura e do peso informados pelo usuário.

## 🚀 Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS
- Git e GitHub

## 📋 Funcionalidades

- Inserção da altura em metros
- Inserção do peso em quilogramas
- Cálculo automático do IMC
- Exibição do resultado com duas casas decimais
- Classificação do IMC
- Validação dos campos
- Interface responsiva e estilizada

## 📊 Classificação do IMC

| IMC | Classificação |
|---|---|
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 até 24,9 | Peso normal |
| 25,0 até 29,9 | Sobrepeso |
| 30,0 até 34,9 | Obesidade grau I |
| 35,0 até 39,9 | Obesidade grau II |
| 40,0 ou mais | Obesidade grau III |

## 🧮 Fórmula utilizada

O cálculo é realizado através da fórmula:

```text
IMC = peso / (altura × altura)
