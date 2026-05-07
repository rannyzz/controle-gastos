let total = 0;
let totalEntradas = 0;
let listaGastos = []; // { id, nome, valor }

// Carrega os dados do banco ao abrir a página
window.onload = function () {
    fetch("bd/buscar_gastos.php")
        .then(r => r.json())
        .then(data => {
            if (data.erro) return;

            // Reconstrói entradas
            data.entradas.forEach(function (e) {
                let valor = parseFloat(e.valor);
                total += valor;
                totalEntradas += valor;
            });

            // Reconstrói gastos
            data.gastos.forEach(function (g) {
                let valor = parseFloat(g.valor);
                listaGastos.push({ id: g.id, nome: g.nome, valor: valor });
                total -= valor;
            });

            renderizarGastos();
            atualizarSaldo();
        });
};

function renderizarGastos() {
    let container = document.getElementById("gastos");
    container.innerHTML = "";

    listaGastos.forEach(function (gasto) {
        container.innerHTML += `
            <div class="item-gasto">
                <span>${gasto.nome} - R$ ${gasto.valor.toFixed(2)}</span>
                <button class="btn-deletar" onclick="deletarGasto(${gasto.id}, ${gasto.valor})">✕</button>
            </div>
        `;
    });
}

function adicionarGasto() {
    let nome  = document.getElementById("nome_gasto").value;
    let valor = Number(document.getElementById("valor_gasto").value);

    if (nome === "" || valor <= 0) {
        alert("Preencha os campos do gasto corretamente!");
        return;
    }

    let formData = new FormData();
    formData.append("nome", nome);
    formData.append("valor", valor);
    formData.append("tipo", "gasto");

    fetch("bd/salvar_gasto.php", { method: "POST", body: formData })
        .then(r => r.json())
        .then(data => {
            if (data.sucesso) {
                listaGastos.push({ id: data.id, nome: nome, valor: valor });
                total -= valor;
                renderizarGastos();
                atualizarSaldo();
                document.getElementById("nome_gasto").value = "";
                document.getElementById("valor_gasto").value = "";
            }
        });
}

function deletarGasto(id, valor) {
    let formData = new FormData();
    formData.append("id", id);

    fetch("bd/deletar_gasto.php", { method: "POST", body: formData })
        .then(r => r.json())
        .then(data => {
            if (data.sucesso) {
                listaGastos = listaGastos.filter(g => g.id != id);
                renderizarGastos();
                // mantém o comportamento original: deletar não devolve saldo
            }
        });
}

function adicionarValor() {
    let valor = Number(document.getElementById("valor_inserido").value);

    if (valor <= 0) {
        alert("Digite um valor válido!");
        return;
    }

    let formData = new FormData();
    formData.append("nome", "Entrada");
    formData.append("valor", valor);
    formData.append("tipo", "entrada");

    fetch("bd/salvar_gasto.php", { method: "POST", body: formData })
        .then(r => r.json())
        .then(data => {
            if (data.sucesso) {
                total += valor;
                totalEntradas += valor;
                atualizarSaldo();
                document.getElementById("valor_inserido").value = "";
            }
        });
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
        // deleta cada gasto do banco
        let promessas = listaGastos.map(function (g) {
            let formData = new FormData();
            formData.append("id", g.id);
            return fetch("bd/deletar_gasto.php", { method: "POST", body: formData });
        });

        Promise.all(promessas).then(function () {
            total = totalEntradas; // volta ao total de entradas
            listaGastos = [];
            renderizarGastos();
            atualizarSaldo();
        });
    }
}