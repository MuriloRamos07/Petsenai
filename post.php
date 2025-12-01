<?php
// Verifica se há parâmetros
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exibir Dados POST</title>
</head>
<body>
    <h1>Dados recebidos via POST</h1>
    <?php if (!empty($_POST)) : ?>
        <ul>
            <?php foreach ($_POST as $chave => $valor) : ?>
                <li>
                <strong>
                <?=htmlspecialchars($chave) ?>
                :</strong> 
                <?=htmlspecialchars($valor) ?>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php else : ?>
        <p>Nenhum dado foi enviado.</p>
    <?php endif; ?>
</body>
</html>