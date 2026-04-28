<?php
$conexao = mysqli_connect("localhost", "root", "", "bdlogin");

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM tblogin WHERE email='$email' AND senha='$password'";
$result = mysqli_query($conexao, $sql);

if (mysqli_num_rows($result) > 0) {
    header("Location: ../home.html");
    exit;
} else {
    echo "Email ou senha incorretos.";
}
?>