let total = Number(localStorage.getItem("total")) || 0;
let listaGastos = JSON.parse(localStorage.getItem("listaGastos") || "[]");
let totalEntradas = Number(localStorage.getItem("totalEntradas")) || 0;

window.onload = function () {
    renderizarGastos();
    atualizarSaldo();
};

function salvarDados() {
    localStorage.setItem("total", total);
    localStorage.setItem("totalEntradas", totalEntradas);
    localStorage.setItem("listaGastos", JSON.stringify(listaGastos));
}

function renderizarGastos() {
    let container = document.getElementById("gastos");
    container.innerHTML = "";

    listaGastos.forEach(function (gasto, index) {
        container.innerHTML += `
            <div class="item-gasto">
                <span>${gasto.nome} - R$ ${gasto.valor.toFixed(2)}</span>
                <button class="btn-deletar" onclick="deletarGasto(${index})">✕</button>
            </div>
        `;
    });
}

function adicionarGasto() {
    let nome = document.getElementById("nome_gasto").value;
    let valor = Number(document.getElementById("valor_gasto").value);

    if (nome === "" || valor <= 0) {
        alert("Preencha os campos do gasto corretamente!");
    } else {
        listaGastos.push({ nome: nome, valor: valor });
        total -= valor;

        salvarDados();
        renderizarGastos();
        atualizarSaldo();

        document.getElementById("nome_gasto").value = "";
        document.getElementById("valor_gasto").value = "";
    }
}

function deletarGasto(index) {
    listaGastos.splice(index, 1); // remove da lista sem devolver o valor

    salvarDados();
    renderizarGastos();
    // sem atualizarSaldo() aqui, saldo não muda
}

function adicionarValor() {
    let valor = Number(document.getElementById("valor_inserido").value);

    if (valor <= 0) {
        alert("Digite um valor válido!");
    } else {
        total += valor;
        totalEntradas += valor; // salva as entradas separado
        atualizarSaldo();
        salvarDados();

        document.getElementById("valor_inserido").value = "";
    }
}

function atualizarSaldo() {
    let saldo = document.getElementById("saldo");
    saldo.innerText = "Saldo: R$ " + total.toFixed(2);

    if (total > 0) {
        saldo.style.color = "#4caf87";
    } else if (total < 0) {
        saldo.style.color = "#e05c5c";
    } else {
        saldo.style.color = "white";
    }
}

function apagar() {
    if (confirm("Tem certeza que deseja apagar todos os gastos?")) {
        // volta o saldo para o total de entradas (sem nenhum gasto)
        total = totalEntradas;
        listaGastos = [];

        salvarDados();
        renderizarGastos();
        atualizarSaldo();
    }
}