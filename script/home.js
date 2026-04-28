let total = Number(localStorage.getItem("total")) || 0;
let listaGastos = localStorage.getItem("listaGastos") || "";

window.onload = function () {
    document.getElementById("gastos").innerHTML = listaGastos;
    atualizarSaldo();
};

function salvarDados() {
    localStorage.setItem("total", total);
    localStorage.setItem("listaGastos", document.getElementById("gastos").innerHTML);
}

function adicionarGasto() {
    let nome = document.getElementById("nome_gasto").value;
    let valor = Number(document.getElementById("valor_gasto").value);

    if (nome === "" || valor <= 0) {
        alert("Preencha os campos do gasto corretamente!");
    } else {
        let gastos = document.getElementById("gastos");

        gastos.innerHTML += nome + " - R$ " + valor.toFixed(2) + "<br>";

        total -= valor;
        atualizarSaldo();
        salvarDados();

        document.getElementById("nome_gasto").value = "";
        document.getElementById("valor_gasto").value = "";
    }
}

function adicionarValor() {
    let valor = Number(document.getElementById("valor_inserido").value);

    if (valor <= 0) {
        alert("Digite um valor válido!");
    } else {
        total += valor;
        atualizarSaldo();
        salvarDados();

        document.getElementById("valor_inserido").value = "";
    }
}

function atualizarSaldo() {
    let saldo = document.getElementById("saldo");

    saldo.innerText = "Saldo: R$ " + total.toFixed(2);

    if (total > 0) {
        saldo.style.color = "green";
    } else if (total < 0) {
        saldo.style.color = "red";
    } else {
        saldo.style.color = "black";
    }
}
function apagar(){
    if(confirm("Tem certeza que deseja apagar todos os gastos?")){
        document.getElementById("gastos").innerHTML = "";
        localStorage.setItem("listaGastos", "");
    }
}