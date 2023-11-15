<img width=100% alt="blue_waves_head" src="https://capsule-render.vercel.app/api?type=waving&color=3c5fb9&height=285&section=header&text=Imersão%20Dev&fontSize=90&animation=fadeIn&fontAlignY=35&desc=7ª%20Edição%20-%20Alura%20&descAlignY=51&descAlign=70"/>

<div align="center">
  <img align="right" width="83" alt="javascript-badge" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" target="_blank">
  <img align="right" width="54" alt="css-badge" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" target="_blank">
  <img align="right" width="60" alt="css-badge" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" target="_blank">
</div>

##
  
### 📁 Descrição do projeto
   Esse projeto foi desenvolvido durante a [`Imersão Dev_7ª Edição`](https://www.alura.com.br/imersao-dados-ia), disponibilizada pela [`Alura`](https://www.alura.com.br/). Seu foco principal foi capacitar os participantes em HTML, CSS e, primordialmente, JavaScript, visando o desenvolvimento de habilidades em lógica de programação.
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
</details>

<details>
  <summary>Desenvolver um conversor de temperaturas entre Fahrenheit, Kelvin e Celsius;</summary>
</details>

<details>
  <summary>Inserir uma linha ao projeto para exibir o valor em Bitcoin.</summary>
</details>


<img width=100% alt="blue_waves_end" src="https://capsule-render.vercel.app/api?type=waving&color=3c5fb9&height=120&section=footer"/>
