const currentURL = window.location.href;

if (currentURL.includes('index.html')) {
    const btnRealizarCompra = document.querySelector('.btn-com-cart');

    btnRealizarCompra.addEventListener('click', () => {
    // Obtener los productos del carrito desde el arreglo allProducts
    const carrito = allProducts.map(product => ({
        title: product.title,
        price: product.price,
        quantity: product.quantity
    }));

    // Guardar los productos en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    if (carrito && carrito.length > 0) {
        window.location.href = 'Compra.php';
    }
    });
    
    
  
} else if (currentURL.includes('Compra.php')) {
    const btnrelaizarcom = document.querySelector('.btn-comprar');
    const vamoaver = document.querySelector('.vamoaver');
    
    const carrito = JSON.parse(localStorage.getItem('carrito'));

    if (carrito) {
        // Por ejemplo, mostrar los productos en la página
        carrito.forEach(product => {
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('vamoaver');
            containerProduct.innerHTML = `
                <div class="cart-product">
                    <div class="info-cart-product">
                        <p>${product.quantity} - ${product.title} - ${product.price}</p>
                    </div>
                </div>
            `;
            
            vamoaver.append(containerProduct);
        });
    }
    
    btnrelaizarcom.addEventListener('click', () => {
        // Obtener los productos del carrito desde el localStorage
        const carrito = JSON.parse(localStorage.getItem('carrito'));

        // Crear un array para almacenar la información de los productos
        const productosInfo = [];

        // Recorrer los productos del carrito y agregar la información al array
        carrito.forEach(product => {
            const productoInfo = `${product.quantity} - ${product.title} - ${product.price}`;
            productosInfo.push(productoInfo);
        });

        // Redireccionar a la página de PHP y pasar la información de los productos por URL
        const url = `Compra.php?productos=${encodeURIComponent(JSON.stringify(productosInfo))}`;
        window.location.href = url;

    });


}

//por si quiero agregar el input
//<input class="infor" type="checkbox" name="Informacion" id="info" required></input>










// const btncom = document.querySelector('.btn-com-cart');
// const btnrelaizarcom = document.querySelector('.btn-comprar');

// btncom.addEventListener('click', () => {
//     window.location.href = 'Compra.html';
// });

// btnrelaizarcom.addEventListener('click', () => {
//     const emailInput = document.getElementById('email');
//     const telefonoInput = document.getElementById('telefono');
//     if (emailInput.value.trim() === '' || telefonoInput.value.trim() === '') {
//         alert('Por favor, complete todos los campos.');
//       } else {
//     console.log("AAAAA");}
    
// });

//funcion enviar correo por si acas
// function enviarCorreo() {
//     const destinatario = 'nestorjldxd@gmail.com';
//     const asunto = 'Esto deberia funcionar';
//     const cuerpo = 'funcionas';

//     const mailtoURL = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

//     const link = document.createElement('a');
//     link.href = mailtoURL;
//     link.target = '_blank'; // Abre el enlace en una nueva pestaña
//     link.click();
// }
