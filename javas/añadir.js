const additem = document.querySelector('.container-cart-ic');
const containeraddprod = document.querySelector('.container-add-prod');
const containeritems = document.querySelector('.container-items');

additem.addEventListener('click', () => {
    
    containeraddprod.classList.toggle('hidden-products')
    console.log(document.querySelector('.container-add-prod'))
    /* console.log(containerCartProducts.classList.toggle('hola', hola))*/
});

const printHTML = (content) => {
    containeritems.innerHTML += content;
};

containeraddprod.addEventListener('click', e => {

    if (e.target.classList.contains('btn-add-pro')){
        const product = e.target.parentElement;

        var nombre = document.getElementById('nombrep').value;
        var precio = document.getElementById('preciop').value;
        var file = document.getElementById('imagenp').files[0];
        console.log("Nombre pro: "+ nombre+ " Precio: "+ precio+ "File: ", file);
        
        const reader = new FileReader();
        reader.onload = (e) => {
        const imageSrc = e.target.result;

        const content = `
            <div class="item">
                <figure>
                    <img class="imagen" src="${imageSrc}" alt="producto">
               </figure>
                <div class="info-producto">
                    <h2>${nombre}</h2>
                    <p class="price">$${precio}</p>
                    <button class="btn-add-cart">Añadir al carro</button>
                </div>
            </div>
            `;
    
        printHTML(content);
        };

        reader.readAsDataURL(file);
    }

    
});

///////////////////////////////


