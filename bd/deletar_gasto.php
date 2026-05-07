<?php
session_start();
$conexao = mysqli_connect("localhost", "root", "", "bdlogin");

if (!isset($_SESSION['email'])) {
    echo json_encode(['erro' => 'Não autenticado']);
    exit;
}

$id    = $_POST['id'];
$email = $_SESSION['email'];

// garante que só deleta gasto do próprio usuário
$sql = "DELETE FROM tbgastos WHERE id='$id' AND email_usuario='$email'";
mysqli_query($conexao, $sql);

echo json_encode(['sucesso' => true]);
?>
