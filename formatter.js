//If you don't include a configu file containing the functions, the application will not work
import {searched_functions} from "./config"

const parenthesis = ["(", ")"];
const brackets = ["[", "]"];

function compare(currentSearch) {
  return currentSearch in searched_functions
}

function highlightBrackets(formattedCode) {
  console.log(formattedCode);
  let coloredArr = formattedCode.split("");
  let finalArr = "";
  for (let i = 0; i < coloredArr.length; i++) {
    if (parenthesis.includes(coloredArr[i])) {
      coloredArr[i] = "<span class='parenthesis'>" + coloredArr[i] + "</span>"
    } else if (brackets.includes(coloredArr[i])) {
      coloredArr[i] = "<span class='bracket'>" + coloredArr[i] + "</span>"
    }
  }
  finalArr += "<pre>"
  for (let i = 0; i < coloredArr.length; i++) {
    finalArr += coloredArr[i]
  }
  finalArr += "</pre>"
  return finalArr;
}

function format(input, targetElement) {
  //console.log(input);
  let arr = input.split("");
  let currentSearch = "";
  let formattedCode = "";
  let aberto = 0;
  let argumentsQty;

  for (var i = 0; i < arr.length; i++) {
    currentSearch += arr[i];

    //Quando achar uma função do Siebel:
    if (compare(currentSearch) === true) {

      //Conta quantos argumentos essa função recebe (isso vai servir para fazer a separação mais adiante)

      argumentsQty = searched_functions[currentSearch].match(/,/g).length + 1;

      //Adiciona a fórmula encontrada ao código formatado
      formattedCode += (currentSearch + "(" + "\n");

      //Limpa a busca atual
      currentSearch = "";

      //Iniciando dessa posição, procurar o proximo (
      for (var j = i; j < arr.length; j++) {
        if (arr[j] === "(") {
          //Remover esses indices do array
          arr.splice(0, j + 1)
          //Interrompe a execução do laço
          j = arr.length;
        }
      }

      //testExpr vai ser depois do paranteses até a próxima virgula que não esteja dentro de parênteses ou colchetes
      //Vai percorrendo o array, sempre que achar ( ou [, muda o status aberto para true
      //Quando encontrar ) ou ], muda o status aberto para false
      //Se encontrar uma vírgula e estiver com o status aberto true, não faz nada e continua
      //Se encontrar uma vírgula e estiver com o status aberto false, dá espaço e indenta

      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === "(" || arr[k] === "[") {
          aberto++;
        } else if (arr[k] === ")" || arr[k] === "]") {
          aberto--;
        } else if (arr[k] === "," && aberto <= 0) {
          //Encontrou uma virgula e o status é fechado, pega a posição dessa virgula [k] e daí pra trás, todo mundo é testExpr
          //Mas no caso de ser a última vírgula, vai ser daí pra frente
          if (argumentsQty > 1) {
            //formattedCode += "    ";
            for (let l = 0; l <= k; l++) {
              if (l === 0 && arr[l] != " " || l != 0) {
                formattedCode += arr[l];
              }
            }
            argumentsQty--;
          }
          //Quebra a linha no código formatado
          formattedCode += '\n';

          //Remove um argumento


          if (argumentsQty === 1) {
            //formattedCode += "    ";
            for (let l = k + 1; l < arr.length - 1; l++) {
              if (l === k + 1 && arr[l] != " " || l != k + 1) {
                formattedCode += arr[l];
              }
            }
            formattedCode += "\n";
            //formattedCode += "   ";
            formattedCode += arr[arr.length - 1];
            argumentsQty--;
          }

          //Deleta essa parte do array
          arr.splice(0, k + 1)

          //Volta para fazer a busca até a próxima vírgula
          k = 0;
        }
      }
    }
  }
  if (formattedCode === "") {
    document.getElementById(targetElement).innerHTML = "Input is not a valid Siebel code";
  } else {
    console.log(highlightBrackets(formattedCode))
    document.getElementById(targetElement).innerHTML = highlightBrackets(formattedCode);
  }
}