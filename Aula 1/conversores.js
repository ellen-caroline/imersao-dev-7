var nomeUsuario;

do {
  nomeUsuario = prompt("Olá! Por favor, informe seu nome: ");

  if (!nomeUsuario) {
    alert("Por favor, digite um nome válido.");
  }
} while (!nomeUsuario);

// atribuir o valor do nomeUsuario ao elemento com o ID "nomeUsuario"
var elementoNomeUsuario = document.getElementById("nomeUsuario");
elementoNomeUsuario.textContent = nomeUsuario;

document.getElementById("moeda").addEventListener("click", function() {
  converterMoeda();
});

document.getElementById("logo").addEventListener("click", function() {
  converterTemperatura();
});

document.getElementById("universo").addEventListener("click", function(event) {
  if (event.target.id === "universo") {
    converterDistancia();
  }
});

function converterMoeda() {
  alert("Seja muito bem vindo, " + nomeUsuario + "!");
  while (true) {
    let moedaEscolhida = prompt(
      nomeUsuario +
        ", escolha a moeda para conversão, digitando o número correspondente à moeda:\n 1. Dolar\n 2. Euro\n 3. Peso Argentino\n 4. Bitcoin"
    );

    switch (moedaEscolhida) {
      case "1":
        let cotacaoDolar = 5.32;
        var valorReal = prompt(
          "Digite o valor, em reais (R$), que deseja converter em dólares ($): "
        );
        var valorConvertido = valorReal / cotacaoDolar;
        valorConvertido = valorConvertido.toFixed(2);
        alert(nomeUsuario + ", o valor em dólar é $ " + valorConvertido);
        break;

      case "2":
        let cotacaoEuro = 6.25;
        var valorReal = prompt(
          "Digite o valor, em reais (R$), que deseja converter em euros (€): "
        );
        var valorConvertido = valorReal / cotacaoEuro;
        valorConvertido = valorConvertido.toFixed(2);
        alert(nomeUsuario + ", o valor em euros é € " + valorConvertido);
        break;

      case "3":
        let cotacaoPeso = 0.014;
        var valorReal = prompt(
          "Digite o valor, em reais (R$), que deseja converter em pesos argentinos (€): "
        );
        var valorConvertido = valorReal / cotacaoPeso;
        alert(
          nomeUsuario + ", o valor em pesos argentinos é € " + valorConvertido
        );
        break;

      case "4":
        let cotacaoBitcoin = 181267.26;
        var valorReal = prompt(
          "Digite o valor, em reais (R$), que deseja converter em bitcoins (₿): "
        );
        var valorConvertido = valorReal / cotacaoBitcoin;
        alert(nomeUsuario + ", o valor em bitcoins é ₿ " + valorConvertido);
        break;

      default:
        alert("Opção de moeda inválida.");
        break;
    }

    let continuar = prompt(
      "Deseja continuar convertendo moedas? Digite o número correspondente:\n1. Sim\n2. Não"
    );
    if (continuar === "2") {
      break;
    }
  }
}

function converterDistancia() {
  alert("Seja muito bem vindo, " + nomeUsuario + "!");
  while (true) {
    let uMedidaEscolhida = prompt(
      nomeUsuario +
        ", escolha a unidade de medida de comprimento, digitando o número correspondente, para ser convertida em Anos-Luz:\n 1. Quilometros\n 2. Metros"
    );

    switch (uMedidaEscolhida) {
      case "1":
        var quilometros = Number(
          prompt(
            "Insira o valor em Quilometros para ser convertido em Anos-Luz: "
          )
        );
        var anosLuz = quilometros / 9.461e12;
        alert(
          quilometros +
            " km equivale à aproximadamente " +
            anosLuz +
            " Anos-Luz"
        );
        //calculando tempo necessário para viajar à velocidade da luz
        var velocidadeLuz = 299792458; // metros por segundo
        var tempoViagem = quilometros / velocidadeLuz;
        tempoViagem = tempoViagem.toFixed(2);

        alert(
          "A uma velocidade constante de luz, levaria aproximadamente " +
            tempoViagem +
            " segundos para viajar essa distância."
        );
        break;

      case "2":
        var metros = Number(
          prompt(
            "Insira o valor em Quilometros para ser convertido em Anos-Luz: "
          )
        );
        var anosLuz = metros / (9, 461e15);
        alert(quilometros + " km equivale à " + anosLuz + " Anos-Luz");

        // Calcular o tempo necessário para viajar à velocidade da luz
        var tempoViagem = (metros * 1000) / velocidadeLuz;
        tempoViagem = tempoViagem.toFixed(2);
        alert(
          "A uma velocidade constante de luz, levaria aproximadamente " +
            tempoViagem +
            " segundos para viajar essa distância."
        );
        break;

      default:
        alert("Opção de unidade de medida inválida.");
        break;
    }

    let continuar = prompt(
      "Deseja continuar convertendo temperaturas em escalas diferentes? Digite o número correspondente:\n1. Sim\n2. Não"
    );
    if (continuar === "2") {
      break;
    }
  }
}

function converterTemperatura() {
  alert("Seja muito bem vindo, " + nomeUsuario + "!");
  while (true) {
    let escalaEscolhida = prompt(
      nomeUsuario +
        ", escolha a escala de temperatura para conversão, digitando o número correspondente:\n 1. Fahrenheit\n 2. Kelvin\n"
    );

    switch (escalaEscolhida) {
      case "1":
        var graus = Number(
          prompt(
            "Insira o valor em Graus Celsius para ser convertido em Fahreiheit: "
          )
        );
        var fahrenheit = (graus * 9) / 5 + 32;
        alert(graus + " ºC equivale à " + fahrenheit + " ºF");
        break;

      case "2":
        var graus = Number(
          prompt(
            "Insira o valor em Graus Celsius para ser convertido em Kelvin: "
          )
        );
        var kelvin = graus + 273.15;
        alert(graus + " ºC equivale à " + kelvin + " K");
        break;

      default:
        alert("Opção de escala de temperatura inválida.");
        break;
    }

    let continuar = prompt(
      "Deseja continuar convertendo temperaturas em escalas diferentes? Digite o número correspondente:\n1. Sim\n2. Não"
    );
    if (continuar === "2") {
      break;
    }
  }
}
