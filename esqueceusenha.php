<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="css/styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esqueceu sua senha?</title>
</head>
<body>
    <div id="container">
        <h1>Esqueceu sua senha?</h1>

        <form method="post" action="bd/esqueceusenha.php">
            <div class="campo-wrapper">
                <span class="icone">✉</span>
                <input type="text" name="email" placeholder="Digite seu email..." autocomplete="off">
            </div>

            <div class="campo-wrapper">
                <span class="icone">🔒</span>
                <input type="password" name="password" placeholder="Digite sua nova senha..." autocomplete="new-password">
            </div>

            <input type="submit" id="cadastrar" value="Redefinir senha">
        </form>

        <button onclick="window.location.href='index.php'">Voltar</button>
    </div>
</body>
</html>