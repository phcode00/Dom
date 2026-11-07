// Crie dois campos (Nome e E-mail) e um botão. Ao clicar, mostre no Console os dois valores.
// Pegue um campo por id e o outro por classe (use métodos diferentes).

// const nome = document.getElementById("nome");
// const email = document.querySelector(".campo-email"); //sempre que colocar o "." no começo e o quertSelector pega uma classe

// document.getElementById("btn-ler").addEventListener("click", function () { //melhor colocar a função dentro do botao de clicar.

//     console.log("Nome:", nome.value);
//     console.log("E-mail:", email.value);

// });


// Crie 5 <div class="bloco">. Percorra todos e pinte cada um de uma cor diferente.
// const blocos = document.querySelectorAll(".bloco");
// const cores = [ "tomato", "orange", "gold", "mediumseagreen", "dodgerblue"];

// blocos.forEach((bloco, i) => {   //chama todos os elementos de queryselectorall chamou no comeco do codigo
//     bloco.style.backgroundColor = cores[i];
//     bloco.textContent = "Bloco " + (i + 1); //Mais 1 porque sempre comceça no 0
// })

// Um botão que mostra quantas vezes foi clicado: "Cliques: 0", "Cliques: 1"...
// const botao = document.getElementById("contador");

// let cliques = 0;

// botao.addEventListener("click", function () {

//     cliques++
//     botao.textContent = "cliques " + cliques;
// });

// const menos = document.getElementById("decremento");

// let tirarcliques = 
//falta terminar essa parte aqui de tirar os cliques


// Em uma <table id="tabela-dados"> vazia, crie via JavaScript uma linha <tr> com duas células <td> ("Nome" e "Idade") e coloque tudo na tabela.

//<table id="tabela-dados" border="1"></table>

// const tabela = document.getElementById("tabela-dados");

// const linha = document.createElement("tr");

// const colunaNome = document.createElement("td");
// const colunaIdade = document.createElement("td");

// colunaNome.textContent = "Nome";
// colunaIdade.textContent = "Idade";

// linha.appendChild(colunaNome);
// linha.appendChild(colunaIdade);

// tabela.appendChild(linha);

// Botão "Mostrar/Esconder" que alterna a visibilidade de um parágrafo usando classList.toggle.
// const segredo = document.getElementById("segredo");

// const botao = document.getElementById("btn-toggle").addEventListener("click", function () {
//     segredo.classList.toggle("oculto")
// });

// Um botão que alterna o tema da página entre claro e escuro usando uma classe no body. O texto do botão também deve mudar ("Modo escuro" / "Modo claro").


// document.getElementById("btn-tema").addEventListener("click", function () {

//     document.body.classList.toggle("escuro");

//     const escuro = document.body.classList.contains(escuro);

//     botao.textContent = escuro ? "Modo claro" : "Modo escuro"
// });