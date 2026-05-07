<?php
session_start();
$conexao = mysqli_connect("localhost", "root", "", "bdlogin");

if (!isset($_SESSION['email'])) {
    echo json_encode(['erro' => 'Não autenticado']);
    exit;
}

$email = $_SESSION['email'];

$sql = "SELECT * FROM tbgastos WHERE email_usuario='$email' ORDER BY data ASC";
$result = mysqli_query($conexao, $sql);

$gastos   = [];
$entradas = [];

while ($row = mysqli_fetch_assoc($result)) {
    if ($row['tipo'] === 'gasto') {
        $gastos[] = $row;
    } else {
        $entradas[] = $row;
    }
}

echo json_encode(['gastos' => $gastos, 'entradas' => $entradas]);
?>
