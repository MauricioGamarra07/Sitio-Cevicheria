/* CARRITO DE COMPRAS */

//Aumentar y disminuir la cantidad del producto
const disminuir = document.querySelectorAll(".boton-menos");
const cantidad = document.querySelectorAll(".cantidad");
const aumentar = document.querySelectorAll(".boton-mas");

const carro = new Carrito();

//Abrir y cerrar Modal del carrito
const carrito = document.querySelector(".carrito");
const modal = document.querySelector(".modal-compra");
const cerrar = document.querySelector("#boton-cerrar");

//Agregar y eliminar los productos del carrito
const agregar = document.querySelectorAll(".boton-agregar");
const listaProductos = document.querySelector(".info-compra");
const vaciarCarrito = document.getElementById("limpiar");
const eliminarProducto = document.querySelectorAll(".borrar-producto");


cargarEventos();

function cargarEventos() {
    carrito.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal-show');
    })

    cerrar.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal-show');
    })

    let newValue = 1;
    for (let i = 0; i < aumentar.length; i++) {
        /* alert("Hizo click en aumentar"); */
        aumentar[i].addEventListener('click',function(event){
                var buttonClicked = event.target;
                /* console.log(buttonClicked); */
                var input = buttonClicked.parentElement.children[1];
                /* console.log(input); */
                var inputValue = input.value;
                newValue = parseInt(inputValue) + 1;
                input.value = newValue;

            /* c++;
            c = (c < 10) ? "0" + c : c;
            cantidad.textContent = c;
            console.log(c); */
        });
    }
    for (let i = 0; i < disminuir.length; i++) {
        /* alert("Hizo click en disminuir"); */
        disminuir[i].addEventListener('click',function(event){
                var buttonClicked = event.target;
                var input = buttonClicked.parentElement.children[1];
                var inputValue = input.value;
                newValue = parseInt(inputValue) - 1;
                if (newValue >= 0){
                    input.value = newValue;
                }else{
                    alert('La cantidad debe ser mayor a 0');
                }
            /* if (c > 1){
                c--;
                c = (c < 10) ? "0" + c : c;
                cantidad.textContent = c;
                console.log(c);
            } */
        });
    }


    for (let i = 0; i < agregar.length; i++) {
        agregar[i].addEventListener('click', (e) => {
            let cantidad = parseInt(newValue);
            /* console.log(cantidad); */

            //Agregamos los datos del archivo productos.js
            let id = agregar[i].getAttribute('id');
            /* console.log(id-1); */
            console.log(productosEntrada[0]["precio"]);
            carro.insertarCarrito(productosEntrada[id-1], cantidad);
        });
    }

    for (let i = 0; i < eliminarProducto.length; i++) {
        eliminarProducto[i].addEventListener('click', (e) => {
            alert("Click en eliminar");
            carro.eliminarProducto(e);
        });
    }

    vaciarCarrito.addEventListener("click", (e) => {
        carro.vaciarCarrito(e);
    });

}

/* cargarProductos(productosEntrada)

function cargarProductos(producto) {
    for (let i = 0; i < producto.length; i++) {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
        <img src="${producto[i].img}">
        <h4>${producto[i].nombre}</h4>
        <h4>${producto[i].precio}</h4>
        <h4>${producto[i].stock}</h4>
        <span class="fa fa-trash borrar-producto" id="${producto.id}"></span>
   `;
    listaProductos.appendChild(div);
    }
} */