<?php
    $erro = isset($_GET['erro']) ? $_GET['erro'] : "";
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="css/styles.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Sistema de Login</title>
</head>
<body>
    <div id="container">
        <h1>Login</h1>
        
        <form method="post" action="bd/bd.php">
            <div class="campo-wrapper">
                <span class="icone">✉</span>
                <input type="text" name="email" placeholder="Endereço de email...">
            </div>

            <div class="campo-wrapper">
                <span class="icone">🔒</span>
                <input type="password" id="senha" name="password" placeholder="Senha..." autocomplete="new-password">
                <p id="avisosenha" class="aviso"></p>
            </div>

            <div class="linha-opcoes">
                <div class="revelar-senha-container">
                    <input type="checkbox" name="revelar_senha" id="revelar_senha" onclick="revelarSenha()">
                    <label for="revelar_senha">Revelar senha</label>
                </div>
                <a href="esqueceusenha.html">Esqueci minha senha</a>
            </div>
            <input type="submit" id="logar" value="LOGIN"> <!-- Botão de login -->
            <?php
            if($erro != ""): ?>
                <p class="aviso"><?php echo $erro; ?></p>
            <?php endif; ?>
            <h3><p>Crie uma conta agora mesmo!</p></h3>
            <button type="button" onclick="window.location.href='cadastro.php'">Criar conta</button>
        </form>
    </div>
</body>
<script src="script/login.js"></script>
</html>