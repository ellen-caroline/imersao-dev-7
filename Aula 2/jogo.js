var nomeUsuario;

do {
  nomeUsuario = prompt("Por favor, informe seu nome: ");

  if (!nomeUsuario) {
    alert("Por favor, digite um nome válido.");
  }
} while (!nomeUsuario);

// atribuir o valor do nomeUsuario ao elemento com o ID "nomeUsuario"
var elementoNomeUsuario = document.getElementById("nomeUsuario");
elementoNomeUsuario.textContent = nomeUsuario;

function jogo() {
  var numeroSecreto = parseInt(Math.random()*1001);
  var contador = 10;
  var tentativasAnteriores = [];

  //enquanto o número de tentativas for válido
  while (contador > 0) {
    var chute = prompt("Digite um número entre 1 e 1000: ");

    //verifica se o chute é válido
    if (chute >= 1 && chute <= 1000) {
      //verifica se o número já foi chutado anteriormente
      if (tentativasAnteriores.includes(chute)) {
        alert(nomeUsuario + ", você já tentou o número " + chute + ". Escolha outro.");
      } else {
        tentativasAnteriores.push(chute);
        
        //verifica se o número é igual ao número secreto
        if (chute == numeroSecreto) {
          if (tentativasAnteriores.length === 1) {
            alert("Impressionante, " + nomeUsuario + "! Você acertou o número oculto " + numeroSecreto + " na primeira tentativa. É uma pessoa adivinha ou gênia?");
          } else {
            alert("Parabéns " + nomeUsuario + "! Você acertou o número oculto " + numeroSecreto + " em " + (11 - contador) + " tentativas.");
          }
          break;
        } else {
          //mensagem de dica
          if (chute > numeroSecreto) {
            alert("Poxa, foi quase " + nomeUsuario + "! Dica: O número oculto é menor que o seu chute ;)\n\nVocê possui " + (contador - 1) + " tentativas.\nNúmeros anteriores: " + tentativasAnteriores.join(", "));
          } else {
            alert("Poxa, foi quase " + nomeUsuario + "! Dica: O número oculto é maior que o seu chute ;)\n\nVocê possui " + (contador - 1) + " tentativas.\nNúmeros anteriores: " + tentativasAnteriores.join(", "));
          }
        }
      }
    } else {
      alert("Digite um número válido, entre 1 e 1000, por favor.");
    }

    contador--;
  }

  if (contador === 0) {
    alert("Suas tentativas acabaram. O número oculto era " + numeroSecreto + ".");
  }
}
