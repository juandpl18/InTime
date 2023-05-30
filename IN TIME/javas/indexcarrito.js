
const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-carts')
});

/* --------------------------------------- */

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')


/* --------------------------------------- LISTA */
const productsList = document.querySelector('.container-items');

// variables arreglos
let allProducts = [];


const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

productsList.addEventListener('click', e => {

    //console.log(e.target.classList.contains('btn-add-cart'))
    if (e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement;
        
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exist = allProducts.some(product => product.title === infoProduct.title);

        if(exist){
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title)  {
                    product.quantity++;
                    return product;
                }else {
                    return product;
                }
            });
            allProducts = [...products];
        }else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }

});

rowProduct.addEventListener('click', (e) => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        showHTML();
    }
    
});

//Func ver en HTML
const showHTML = () => {
    console.log('Holaaa')
    //LIMPIAR
    rowProduct.innerHTML = '';
    let total = 0;
    let totalOFProducts = 0;

    if(!allProducts.length){
        containerCartProducts.innerHTML=`
        <div class="row-product">
        <div class="cart-product">
            <p class="cart-empty" >El carrito está vacio </p>
        </div>
        
        
    </div>
    
    <div class="cart-total">
        <h3>Total:</h3>
        <span class="total-pagar">$0</span>
    </div>
    <button class="btn-com-cart">Realizar Compra</button>
        `;
        countProducts.innerText = 0; // Actualiza el contador de productos a 0
        containerCartProducts.classList.add('hidden-carts'); // Agrega la clase 'hidden-carts'
        return; // Sale del if y de la función
    }

    //containerCartProducts.classList.remove('hidden-carts'); // Elimina la clase 'hidden-carts'


    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('row-product');

        containerProduct.innerHTML = `
            <div class="cart-product">
                            <div class="info-cart-product">
                                <span class="cantidad-producto-carrito">${product.quantity}</span>
                                <p class="titulo-producto-carrito">${product.title}</p>
                                <span class="precio-producto-carrito">${product.price}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                        </div>
        `;

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOFProducts = totalOFProducts + product.quantity;
        
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOFProducts;
};

/////////////////////
