<img width=100% alt="blue_waves_head" src="https://capsule-render.vercel.app/api?type=waving&color=436CBD&height=285&section=header&text=Imersão%20Dev&fontSize=90&animation=fadeIn&fontAlignY=35&desc=7ª%20Edição%20-%20Alura%20&descAlignY=51&descAlign=70"/>

<div align="center">
  <img align="right" width="83" alt="javascript-badge" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" target="_blank">
  <img align="right" width="54" alt="css-badge" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" target="_blank">
  <img align="right" width="60" alt="css-badge" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" target="_blank">
</div>

##
  
### 📁 Descrição do projeto
   Esse projeto foi desenvolvido durante a [`Imersão Dev_7ª Edição`](https://www.alura.com.br/imersao-dados-ia), disponibilizada pela [`Alura`](https://www.alura.com.br/). Seu foco principal foi capacitar os participantes, em HTML, CSS e, primordialmente, JavaScript, visando o desenvolvimento de habilidades em lógica de programação. O repositório abrange soluções para os desafios propostos nas cinco aulas da imersão.
   
##

### 🫧 Aula 1: Mergulhe em JavaScript com um Conversor de Moedas
#### Introdução
Nesta aula, foram explorados conceitos essenciais de programação, como variáveis, operadores e interação com o console. Atividades incluíram a criação de uma conta no CodePen, compreensão das diferenças entre HTML, CSS e JavaScript, e aplicação da função toFixed() para fixar casas decimais.

#### Desafios propostos!
<details>
  <summary>Adicionar outras moedas para converter;</summary>
    
    function converterMoeda() {
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
      
</details>

<details>
  <summary>Criar um conversor de quilômetros para anos-luz e descobrir o tempo necessário para viajar de uma estrela para outra;</summary>
  
      function converterDistancia() {
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
</details>

<details>
  <summary>Desenvolver um conversor de temperaturas entre Fahrenheit, Kelvin e Celsius;</summary>
  
      function converterTemperatura() {
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
</details>

<details>
  <summary>Inserir uma linha ao projeto para exibir o valor em Bitcoin.</summary>
  
        case "4":
        let cotacaoBitcoin = 181267.26;
        var valorReal = prompt(
          "Digite o valor, em reais (R$), que deseja converter em bitcoins (₿): "
        );
        var valorConvertido = valorReal / cotacaoBitcoin;
        alert(nomeUsuario + ", o valor em bitcoins é ₿ " + valorConvertido);
        break;
        
</details>

##

### 🫧 Aula 2: Desenvolva suas Habilidades com um Jogo de Adivinhação
#### Introdução
Na aula, é desenvolvido um jogo de adivinhação em JavaScript, onde o programa escolhe um número aleatório e o objetivo é adivinhar. Instrui-se o uso o fork de um projeto base para personalização. A função Math.random() é introduzida, e explora-se a replicação do projeto em diversas linguagens com IA generativa, como ChatGPT e Bard.

#### Desafios propostos!
<details>
  <summary>Adicionar um limite de tentativas para que a pessoa possa adivinhar o número e, ao final, exiba a resposta correta;</summary>

          var numeroSecreto = parseInt(Math.random()*1001);
          var contador = 10;
          var tentativasAnteriores = [];
  
          //enquanto o número de tentativas for válido
          while (contador > 0) {
            var chute = prompt("Digite um número entre 0 e 1000: ");
  
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
                  alert("Impressionante, " + nomeUsuario + "! Você acertou o número secreto " + numeroSecreto + " na primeira tentativa. É uma pessoa adivinha ou gênia?");
                } else {
                  alert("Parabéns " + nomeUsuario + "! Você acertou o número secreto " + numeroSecreto + " em " + (11 - contador) + " tentativas.");
                }
                break;
              } else {
                //mensagem de dica
                if (chute > numeroSecreto) {
                  alert("Poxa, foi quase " + nomeUsuario + "! Dica: O número secreto é menor que o seu chute ;)\n\nVocê possui " + (contador - 1) + " tentativas.\nNúmeros anteriores: " + tentativasAnteriores.join(", "));
                } else {
                  alert("Poxa, foi quase " + nomeUsuario + "! Dica: O número secreto é maior que o seu chute ;)\n\nVocê possui " + (contador - 1) + " tentativas.\nNúmeros anteriores: " + tentativasAnteriores.join(", "));
                }
              }
            }
          } else {
            alert("Digite um número válido, entre 1 e 1000, por favor.");
          }
      
          contador--;
        }
      
        if (contador === 0) {
          alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto + ".");
        }
      }
  
</details>
<details>
  <summary>Quando a pessoa errar, forneça uma dica informando se o número chutado é maior ou menor que o número secreto;</summary>

    //verifica se o número é igual ao número secreto
            if (chute == numeroSecreto) {
              if (tentativasAnteriores.length === 1) {
                alert("Impressionante, " + nomeUsuario + "! Você acertou o número secreto " + numeroSecreto + " na primeira tentativa. É uma pessoa adivinha ou gênia?");
              } else {
                alert("Parabéns " + nomeUsuario + "! Você acertou o número secreto " + numeroSecreto + " em " + (11 - contador) + " tentativas.");
              }
              break;
            } else {
              //mensagem de dica
              if (chute > numeroSecreto) {
                alert("Poxa, foi quase " + nomeUsuario + "! Dica: O número secreto é menor que o seu chute ;)\n\nVocê possui " + (contador - 1) + " tentativas.\nNúmeros anteriores: " + tentativasAnteriores.join(", "));
              } else {
                alert("Poxa, foi quase " + nomeUsuario + "! Dica: O número secreto é maior que o seu chute ;)\n\nVocê possui " + (contador - 1) + " tentativas.\nNúmeros anteriores: " + tentativasAnteriores.join(", "));
              }
            }
          }
        } else {
          alert("Digite um número válido, entre 1 e 1000, por favor.");
        }
  
</details>
<details>
  <summary>Aprofunde-se e aprenda a diferença entre os operadores == e ===;</summary>
  
  - O operador == compara os valores e realiza a coerção de tipo se necessário. Por exemplo, 1 == '1' retornará true porque o JavaScript converte a string ‘1’ em um número antes de fazer a comparação1.

  - O operador ===, por outro lado, compara tanto o valor quanto o tipo, sem realizar a coerção de tipo. Isso significa que 1 === '1' retornará false porque um é número e o outro é uma string1.
  <br>
  Portanto, a principal diferença entre == e === é que == compara apenas os valores, enquanto === compara os valores e os tipos.
</details>

##

### 🫧 Aula 3: Explore Estruturas de Dados Criando um Catálogo de Filmes
#### Introdução
Na aula, são abordadas estruturas de dados e listas em JavaScript, com foco na criação, manipulação e exibição de elementos. Os tópicos incluem: criação e manipulação de arrays, utilização de métodos como push e length, seleção de elementos por índice, aplicação de loops for para iteração, e integração da lógica do programa para exibição na tela.

#### Desafios propostos!
<details>
  <summary>Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes, pode ser uma lista de animes, HQs, cursos, capas de jogos, entre outros;</summary>


</details>

<details>
  <summary>Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while;</summary>

    while
    /*var i = 0;
    while (i < listaFilmes.length) {
      document.write('<img src=' + listaFilmes[i] + '>');
      i++;
  
</details>

<details>
  <summary>Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente;</summary>

  
</details>

<details>
  <summary>Criar um campo e um botão para adicionar a imagem diretamente na tela, em vez de adicionar no código;</summary>

  
</details>

##

### 🫧 Aula 4: Mergulhe em JavaScript com um Conversor de Moedas
#### Introdução
Nesta aula, a sintaxe e criação de funções em JavaScript foram exploradas, com sua integração ao HTML exibido na tela. A execução das funções foi condicionada ao clique em um botão, e o JavaScript foi utilizado para acessar e obter valores do HTML através de getElementById() e .value. A passagem de informações por meio de parâmetros foi abordada, assim como o uso de .endsWith() para verificar terminações em texto. Adicionalmente, um exemplo de reatribuição de variável para "limpar" campos foi demonstrado, utilizando "".

#### Desafios propostos!
<details>
  <summary>Criar um botão para remover um filme na tela;</summary>

</details>

<details>
  <summary>Adicionar não apenas a imagem do filme, mas também o nome por meio de outro input;</summary>

</details>

<details>
  <summary>Armazenar todos os filmes adicionados em uma lista/array e percorrê-la sempre que desejar imprimir ou remover um filme;</summary>

</details>

##

### 📂 Estrutura do Repositório:
#### Aula 1 - Conversores:
- `index.html`: Página principal para os conversores de moeda, unidade de temperatura e anos-luz.
- `style.css`: Estilos CSS para a página.
- `conversor.js`: Implementação em JavaScript dos conversores.

#### Aula 2 - Número Oculto (Jogo de Adivinhação):
- `index.html`: Página principal para o jogo de adivinhação.
- `style.css`: Estilos CSS para a página.
- `jogo.js`: Implementação em JavaScript do jogo de adivinhação.

#### Aulas 3 e 4 - EllenFlix (Plataforma de Visualização de Mídias):
- `index.html`: Página principal para a plataforma EllenFlix.
- `style.css`: Estilos CSS para a página.
- `EllenFlix.js`: Implementação em JavaScript da plataforma de visualização de filmes.

##

### 🔍 Visualização do projeto
- Clone este repositório em sua máquina local.
- Navegue até a pasta da aula desejada.
- Abra o arquivo `index.html` no seu navegador preferido.
<br>
✦ Você também pode visualizar pela
[coleção no CodePen](https://codepen.io/collection/waQxoZ)

##

### 🌐 Links úteis
- [Como colocar toggle no GitHub](https://gist.github.com/Ashton-W/864d09d71f7cb8e5b47ebaac02b98455)
- [CodePen](https://codepen.io/)
- [Operadores Booleanos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [JavaScript segundo a documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Função Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Operadores em JavaScript](https://www.alura.com.br/artigos/operadores-matematicos-em-javascript)
- [Diferença entre == e ===](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Arrays em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

##

### 📱 Hashtags
#imersaodev #alura

<img width=100% alt="blue_waves_end" src="https://capsule-render.vercel.app/api?type=waving&color=436CBD&height=120&section=footer"/>
