<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["Nombre"];
        $email = $_POST["email"];
        $telefono = $_POST["Telefono"];
        $apellido = $_POST["apellido"];
        $cedula = $_POST["cedula"];
        $direccion = $_POST["direccion"];
        $incluiir = $_POST["Incluiir"];
        $ciudad = $_POST["ciudad"];
        $departamento = $_POST["Selecciona"];
        $codigopostal = $_POST["codigopostal"];

        // Construcción del cuerpo del correo
        $cuerpo = "Información de contacto:\n";
        $cuerpo .= "Nombre: $nombre $apellido\n";
        $cuerpo .= "Email: $email\n";
        $cuerpo .= "Teléfono: $telefono\n\n";
        $cuerpo .= "Información de envío:\n";
        $cuerpo .= "Cédula: $cedula\n";
        $cuerpo .= "Dirección: $direccion\n";
        $cuerpo .= "Incluir: $incluiir\n";
        $cuerpo .= "Ciudad: $ciudad\n";
        $cuerpo .= "Departamento: $departamento\n";
        $cuerpo .= "Código Postal: $codigopostal\n";

        // Recuperar la información de los productos del carrito desde $_GET
        if (isset($_GET['productos'])) {
            $productosInfo = json_decode($_GET['productos'], true);

        // Agregar la información de los productos al cuerpo del correo
            $cuerpo .= "\n\nInformación de los productos:\n";
            foreach ($productosInfo as $productoInfo) {
                $cuerpo .= $productoInfo . "\n";
            }
        }

        // Configuración de los datos del correo
        $destinatario = "intimereloj@gmail.com";
        $asunto = "Nuevo pedido de compra";

        // Envío del correo electrónico
        $cabeceras = "From: $email";

        if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
            echo "El pedido de compra se ha enviado correctamente.";
        } else {
            echo "Hubo un error al enviar el pedido de compra.";
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compra</title>
    <link rel="stylesheet" href="Stylescom.css">
</head>
<body>
    <header class="header2">
        <img src="IMG/Intime.png" width="60px">
        <h2 class="logo">IN TIME</h2>
        <nav class="navigation">
            <a href="index.html">Home</a>
            <!-- <a href="#">About</a>
            <a href="#">Services</a> -->
            <a href="contacto.html">Contact</a>
        </nav>
    </header>
    <section class="section1">
        <form id="compraForm">
            <div class="containerfor">
                <div class="enca"><h2> RESUMEN DE COMPRA </h2></div>
                <div class="vamoaver">
                    <!-- <h2> FORMULARIO DE COMPRA </h2> -->
                </div>
                <BR>
                <div class="enca"><h2> INFORMACION DE CONTACTO </h2></div>
                <!-- <p>Email</p> -->
                <input class="inpput" type="email" name="email" id="email" placeholder="Correo Electronico" required>
                <!-- <p>Telefono</p> -->
                <input class="inpput" type="number" name="Telefono" id="Telefono" placeholder="Telefono" required>
                <br>
                <div class="enca"><h2> DIRECCION DE ENVIO </h2></div>
                <input class="inpput" type="text" name="Nombre" id="nombre" placeholder="Nombre" required>
                <input class="inpput" type="text" name="apellido" id="apellido" placeholder="Apellido" required>
                <input class="inpput" type="text" name="cedula" id="cedula" placeholder="Cedula" required>
                <input class="inpput" type="text" name="direccion" id="direccion" placeholder="Direccion" required>
                <input class="inpput" type="text" name="Incluiir" id="Incluiir" placeholder="Incluiir: barrio, torre, apartamento" required>
                <input class="inpput" type="text" name="ciudad" id="ciudad" placeholder="Ciudad" required>
                <select class="Selecciona" name="Selecciona" required>
                    <option value="" disabled selected hidden>Departamento</option>
                    <option value="opcion1">Amazonas</option>
                    <option value="opcion2">Antioquia</option>
                    <option value="opcion3">Arauca</option>
                    <option value="opcion4">Bogotá</option>
                    <option value="opcion5">Bolívar</option>
                    <option value="opcion6">Boyacá</option>
                    <option value="opcion7">Caldas</option>
                    <option value="opcion8">Caquetá</option>
                    <option value="opcion9">Casanare</option>
                    <option value="opcion10">Cauca</option>
                    <option value="opcion11">Cesar</option>
                    <option value="opcion12">Chocó</option>
                    <option value="opcion13">Córdoba</option>
                    <option value="opcion14">Cundinamarca</option>
                    <option value="opcion15">Guainía</option>
                    <option value="opcion16">Guaviare</option>
                    <option value="opcion17">Huila</option>
                    <option value="opcion18">La Guajira</option>
                    <option value="opcion19">Magdalena</option>
                    <option value="opcion20">Meta</option>
                    <option value="opcion21">Nariño</option>
                    <option value="opcion22">Norte de Santander</option>
                    <option value="opcion23">Putumayo</option>
                    <option value="opcion24">Quindío</option>
                    <option value="opcion25">Risaralda</option>
                    <option value="opcion26">San Andrés y Providencia</option>
                    <option value="opcion27">Santander</option>
                    <option value="opcion28">Sucre</option>
                    <option value="opcion29">Tolima</option>
                    <option value="opcion30">Valle del Cauca</option>
                    <option value="opcion31">Vaupés</option>
                    <option value="opcion32">Vichada</option>
                </select>
                <input class="inpput" type="text" name="codigopostal" id="codigopostal" placeholder="Codigo Postal" required>
            </div>
            <button class="btn-comprar">Realizar compra</button>
        </form>
    </section>

    <!-- <div class="vamoaver">
        <p>HOLA</p>
    </div> -->


    <script src="javas/compra.js"></script>

</body>
</html>