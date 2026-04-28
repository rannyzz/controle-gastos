function revelarSenha() {
    let input = document.getElementById("senha");
    let check = document.getElementById("revelar_senha");

    if (check.checked) {
        input.type = "text";      // mostra senha
    } else {
        input.type = "password";  // esconde senha
    }
}