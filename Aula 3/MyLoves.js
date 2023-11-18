//estrutura para armazenar filmes
var listaFilmes = [];

//função para criar filmes
function criarFilme(nome, poster) {
  return { nomeFilme: nome, posterFilme: poster };
}

//função para verificar se o filme já existe na lista
function filmeJaAdicionado(nome) {
  return listaFilmes.some(filme => filme.nomeFilme === nome);
}

//botão: função para adicionar o filme
function adicionarFilme() {
  var nomeDoFilme = prompt("Digite o nome do filme:");
  var linkDoPoster = prompt("Digite o link do poster do filme:");
  //verifica se o filme já foi adicionado
  if (filmeJaAdicionado(nomeDoFilme)) {
    alert("Este filme já foi adicionado anteriormente.");
  } else {
    //se não, cria o objeto filme e adiciona à lista
    var novoFilme = criarFilme(nomeDoFilme, linkDoPoster);
    listaFilmes.push(novoFilme);
    alert("Filme adicionado com sucesso!");
  }
}

//botão: função para remover um filme da lista
function removerFilme() {
  var nomeDoFilme = prompt("Digite o nome do filme que deseja remover:");

  //filtra os filmes que não correspondem ao nome fornecido
  listaFilmes = listaFilmes.filter(filme => filme.nomeFilme !== nomeDoFilme);

  alert("Filme removido com sucesso!");
}

listaFilmes.push(criarFilme("Howl's Moving Castle", "https://i.pinimg.com/564x/13/f4/31/13f4319391c47baac8beb379872ad06a.jpg"));
listaFilmes.push(criarFilme("Spider Man Accross the Spider Verse", "https://i.pinimg.com/564x/07/75/3d/07753deebe15240ca6d8840ea6b721c6.jpg"));
listaFilmes.push(criarFilme("Spider Man Into the Spider Verse", "https://i.pinimg.com/564x/3b/12/37/3b1237323608afbb61dc5184dcadd38f.jpg"));
listaFilmes.push(criarFilme("Everything Everywhere All at Once", "https://i.pinimg.com/564x/91/7c/b6/917cb6a867782a7f79d15176312b3415.jpg"));
listaFilmes.push(criarFilme("Blade Runner 2049", "https://i.pinimg.com/564x/55/85/c4/5585c429c65d91ad053516f7164fe79f.jpg"));
listaFilmes.push(criarFilme("Hereditary", "https://i.pinimg.com/564x/95/60/b3/9560b3869e6354a6cdb85b5ee546ae64.jpg"));
listaFilmes.push(criarFilme("Puss in Boots", "https://i.pinimg.com/564x/be/43/e2/be43e25c2b1a2b1780d88667a130e13d.jpg"));
listaFilmes.push(criarFilme("Donnie Darko", "https://i.pinimg.com/564x/97/8f/87/978f87dcb9881ab4cc473690e527fc50.jpg"));
listaFilmes.push(criarFilme("Corpse Bride", "https://i.pinimg.com/564x/f0/5b/34/f05b34ac58ae5284561be13ded164e63.jpg"));
listaFilmes.push(criarFilme("Pearl", "https://i.pinimg.com/564x/23/80/75/238075a17dba997d79d8c7c1280d33e9.jpg"));
listaFilmes.push(criarFilme("Inglorious Bastards", "https://i.pinimg.com/564x/d4/52/5d/d4525d9aaa109242b830445eb75e950a.jpg"));
listaFilmes.push(criarFilme("Dead Poets Society", "https://i.pinimg.com/736x/06/a0/b2/06a0b24599b90bc0645758df0e5cec9f.jpg"));

for (var i=0; i<listaFilmes.length; i++) {
  document.write('<div class="containerFilme">');
  document.write('<img src='+ listaFilmes[i].posterFilme + '>');
  //título dos filmes
  document.write('<p>' + listaFilmes[i].nomeFilme + '</p>');
}
document.write('</div>')


//desafio 2 da aula, substituir for por while
/*var i = 0;
while (i < listaFilmes.length) {
  document.write('<img src=' + listaFilmes[i] + '>');
  i++;
}*/
