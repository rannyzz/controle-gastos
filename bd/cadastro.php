<?php
    $conexao = mysqli_connect("localhost", "root", "", "bdlogin");
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO tblogin (email, senha) VALUES ('$email', '$password')";
    if (mysqli_query($conexao, $sql)) {
        header("Location: ../index.html");
        exit;
    } else {
        echo "Erro ao criar conta: " . mysqli_error($conexao);
    }
?>