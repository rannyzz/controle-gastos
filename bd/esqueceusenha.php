<?php
    $conexao = mysqli_connect("localhost", "root", "", "bdlogin");
    $email = $_POST['email'];
    $password_new = $_POST['password'];

    $sql = "UPDATE tblogin SET senha = '$password_new' WHERE email = '$email'";
    if (mysqli_query($conexao, $sql)) {
        header("Location: ../index.php");
        exit;
    } else {
        echo "Erro ao criar conta: " . mysqli_error($conexao);
    }
?>