<?php
session_start();
$conexao = mysqli_connect("localhost", "root", "", "bdlogin");

if (!isset($_SESSION['email'])) {
    echo json_encode(['erro' => 'Não autenticado']);
    exit;
}

$email = $_SESSION['email'];
$nome  = $_POST['nome'];
$valor = $_POST['valor'];
$tipo  = $_POST['tipo']; // 'gasto' ou 'entrada'

$sql = "INSERT INTO tbgastos (email_usuario, nome, valor, tipo) VALUES ('$email', '$nome', '$valor', '$tipo')";
mysqli_query($conexao, $sql);

echo json_encode(['sucesso' => true, 'id' => mysqli_insert_id($conexao)]);
?>
