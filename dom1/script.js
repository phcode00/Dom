// //Pega o elemento pelo id
// const paragrafo = document.getElementById("mensagem");

// console.log(paragrafo);

// //Altera o texto
// paragrafo.textContent = "O DOM permitiu que o JS me alterasse!";
// paragrafo.style.color = "blue";
// paragrafo.style.borderBottom = "2px solid blue";

// const botao = document.getElementById("btn-acao");
// console.log("Tag do botão:" + botao.tagName);

// Por TAG
// const primeiroP = document.querySelector("p");
// primeiroP.style.backgroundColor = "yellow";

// const alerta = document.querySelector(".alerta");
// console.log(alerta);
// console.log("Por Classe:", alerta.textContent);

// const span = document.querySelector("#unico");
// console.log(span);
// span.textContent = "Alterado pelo querySelector!";

// const pNoDiv = document.querySelector("div p");
// pNoDiv.style.fontWeight = "bold";

// const itens = document.querySelectorAll(".item"); //documento ele entra no html 
// console.log(itens);

// for (let i = 0; i < itens.length; i++) {
//     console.log("Item" + (i + 1) + ": " + itens[i].textContent);

//     if (i % 2 !== 0) {
//         itens[i].style.backgroundColor = "#ccc"
//     }
// }

// for (const item of itens) {
//     item.style.fontWeight = "bold";
// };

// itens.forEach((item, index) => {
//     console.log(index + ": " + item.textContent);
// });

// const saudacao = document.getElementById("saudacao"); //puxar um elemento pelo id 
// const nome = document.getElementById("nome");
// const link = document.getElementById("link");

// function mudarDados() {

//     saudacao.textContent = "O conteudo da div foi alterado!";

//     nome.value = "Novo valor (Pedro)";

//     saudacao.innerHTML += '<p style="color: blue;">Conteúdo injetado com innerHTML</p>' //constroi qualquer coisa do javascript pro html

//     link.setAttribute("href", "https://www.google.com"); // troca um atributo quem nem fizemos com o a no html
//     console.log(link.getAttribute("href")); // o get puxa o atributo

//     saudacao.classList.add("destaque");
// }

// document.getElementById("btn-mudar").addEventListener("click", mudarDados);

// Excluir, Inserir na lista

const lista = document.getElementById("lista");

function adicionarItem() {

    const novoItem = document.createElement("li"); //createElement PRA CRIAR

    novoItem.textContent = "novo item às " + new Date().toLocaleTimeString(); //toLocaleTimeString() pra pegar as horas do computador

    lista.appendChild(novoItem); //adiciona itens na lista
}

function removerUltimo() {

    const ultimo = lista.lastElementChild;

    if (ultimo) {
        lista.removeChild(ultimo);
        console.log("Ultimo item removido");
    } else {
        console.log("Lista vazia.Nada a remover");
    }
}

document.getElementById("btn-add").addEventListener("click", adicionarItem);
document.getElementById("btn-remover").addEventListener("click", removerUltimo);