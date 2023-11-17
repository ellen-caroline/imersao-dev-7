var listaFilmes = [
//Howl's Moving Castle
"https://i.pinimg.com/564x/13/f4/31/13f4319391c47baac8beb379872ad06a.jpg",
//Spider Man Accross the Spider Verse
"https://i.pinimg.com/564x/07/75/3d/07753deebe15240ca6d8840ea6b721c6.jpg",
//Spider Man Into the Spider Verse
"https://i.pinimg.com/564x/3b/12/37/3b1237323608afbb61dc5184dcadd38f.jpg",
//Everything Everywhere All at Once 
"https://i.pinimg.com/564x/91/7c/b6/917cb6a867782a7f79d15176312b3415.jpg",
//Blade Runner 2049
"https://i.pinimg.com/564x/55/85/c4/5585c429c65d91ad053516f7164fe79f.jpg",
//Hereditary
"https://i.pinimg.com/564x/95/60/b3/9560b3869e6354a6cdb85b5ee546ae64.jpg",
//Puss in Boots
"https://i.pinimg.com/564x/be/43/e2/be43e25c2b1a2b1780d88667a130e13d.jpg",
//Donnie Darko
"https://i.pinimg.com/564x/97/8f/87/978f87dcb9881ab4cc473690e527fc50.jpg",
//Corpse Bride
"https://i.pinimg.com/564x/f0/5b/34/f05b34ac58ae5284561be13ded164e63.jpg",
//Pearl
"https://i.pinimg.com/564x/23/80/75/238075a17dba997d79d8c7c1280d33e9.jpg",
//Inglorious Bastards
"https://i.pinimg.com/564x/23/80/75/238075a17dba997d79d8c7c1280d33e9.jpg",
//Dead Poets Society
"https://i.pinimg.com/736x/06/a0/b2/06a0b24599b90bc0645758df0e5cec9f.jpg",
];

var listaNomesFilmes = [
"Howl's Moving Castle",
"Spider Man Accross the Spider Verse",
"Spider Man Into the Spider Verse",
"Everything Everywhere All at Once",
"Blade Runner 2049",
"Hereditary",
"Puss in Boots",
"Donnie Darko",
"Corpse Bride",
"Pearl",
"Inglourious Bastards",
"Dead Poets Society",
];

for (var i=0; i<listaFilmes.length; i++) {
  document.write('<div class="containerFilme">');
  document.write('<img src='+ listaFilmes[i] + '>');
  //título dos filmes
  document.write('<p>' + listaNomesFilmes[i] + '</p>');
}
document.write('</div>')

//desafio 2 da aula, substituir 'for' por 'while'
/*var i = 0;
while (i < listaFilmes.length) {
  document.write('<img src=' + listaFilmes[i] + '>');
  i++;
}*/
