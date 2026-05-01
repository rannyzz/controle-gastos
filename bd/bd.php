<?php
session_start();
$conexao = mysqli_connect("localhost", "root", "", "bdlogin");

$email = $_POST['email'];
$password = $_POST['password'];

if (empty($email) || empty($password)) {
    header("Location: ../index.php?erro=Preencha todos os campos!");
    exit;
}

$sql = "SELECT * FROM tblogin WHERE email='$email' AND senha='$password'";
$result = mysqli_query($conexao, $sql);

if (mysqli_num_rows($result) > 0) {
    $usuario = mysqli_fetch_assoc($result);
    $_SESSION['nome'] = $usuario['nome'];
    header("Location: ../home.php");
    exit;
} else {
    header("Location: ../index.php?erro=Email ou senha incorretos.");
    exit;
}
?>