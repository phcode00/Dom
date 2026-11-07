const input = document.getElementById("nova-tarefa");
const btnAdd = document.getElementById("btn-add");
const lista = document.getElementById("lista-tarefas");

function adicionarTarefa() {

    const texto = input.value.trim(); //trim trata o erro de se a pessoas digitar dentro da caixa e ela der espaço pra frente ou pra tras

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li"); // ccreateElement cria uma nova coisa pro html

    item.textContent = texto;

    item.addEventListener("click", function () { //addEventListener espera um evento acontecer que no caso é click
        item.classList.toggle("feita")
    });

    const btnRemover = document.createElement("button");

    btnRemover.textContent = " X";

    btnRemover.addEventListener("click", function (e) {

        e.stopPropagation(); //

        item.remove();
    });

    item.appendChild(btnRemover);

    lista.appendChild(item);

    input.value = "";
    input.focus();

}

btnAdd.addEventListener("click", adicionarTarefa);

input.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        adicionarTarefa();
    }
})
