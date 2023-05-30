<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Hola</p>
</body>
</html>
<?php
$destinatario = "tu_correo_electronico@example.com";
$asunto = "Prueba de envío de correo";
$cuerpo = "Este es un correo de prueba.";

// Envío del correo electrónico
if (mail($destinatario, $asunto, $cuerpo)) {
    echo "El servidor es capaz de enviar correos electrónicos.";
} else {
    echo "Hubo un error al enviar el correo electrónico.";
}
?>


 
