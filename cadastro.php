<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="css/styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro | Sistema de Login</title>
</head>
<body>
    <div id="container">
        <h1>Cadastrar</h1>

        <form method="post" action="bd/cadastro.php">
            <div class="campo-wrapper">
                <span class="icone">😀</span>
                <input type="text" name="nome" placeholder="Digite seu nome" autocomplete="off">
            </div>
            <div class="campo-wrapper">
                <span class="icone">✉</span>
                <input type="text" name="email" placeholder="Digite seu email..." autocomplete="off">
            </div>

            <div class="campo-wrapper">
                <span class="icone">🔒</span>
                <input type="password" name="password" placeholder="Digite sua senha..." autocomplete="new-password">
            </div>

            <input type="submit" id="cadastrar" value="Cadastrar">
        </form>

        <button onclick="window.location.href='index.php'">Voltar</button>
    </div>
</body>
</html>