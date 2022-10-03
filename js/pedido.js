/* CARRITO DE COMPRAS */

//Abrir y cerrar Modal del carrito
const carrito = document.querySelector(".carrito");
const modal = document.querySelector(".modal-compra");
const cerrar = document.querySelector("#boton-cerrar");

//Aumentar y disminuir la cantidad del producto
const disminuir = document.querySelectorAll(".boton-menos");
const cantidad = document.querySelectorAll(".cantidad");
const aumentar = document.querySelectorAll(".boton-mas");

const carro = new Carrito();

//Agregar y eliminar los productos del carrito
const agregar = document.querySelectorAll(".agregar");
const listaProductos = document.querySelector(".info-compra");
const vaciarCarrito = document.getElementById("limpiar");
const eliminarArticulo = document.querySelectorAll(".eliminar");

const contadorCarrito = document.getElementById("contador");

const precioTotal = document.querySelector(".precioTotal");

let arregloCarrito = [];

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
        aumentar[i].addEventListener('click', function (event) {
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
        disminuir[i].addEventListener('click', function (event) {
            var buttonClicked = event.target;
            var input = buttonClicked.parentElement.children[1];
            var inputValue = input.value;
            newValue = parseInt(inputValue) - 1;
            if (newValue >= 0) {
                input.value = newValue;
            } else {
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

    let total = 0;
    let totalCompra = 0;
    let contador = 0;
    let array = [0]; //Array de los Id's
    for (let i = 0; i < agregar.length; i++) {
        agregar[i].addEventListener('click', () => {
            let cantidad = parseInt(newValue);
            /* console.log(cantidad); */

            //Capturamos el numero de id que está en su atributo id
            let id = parseInt(agregar[i].getAttribute('id'));
            console.log(id);

            //Buscamos en el array un número igual que el id capturado
            let num = array.find(item => item == id);
            console.log(num);

            let arregloProducto = []; //Array donde agregaremos los productos 1 por 1


            /* Si el numero buscado en el array de Id's es igual al id
            capturado significa que ya se agregó el producto, por ello
            solo le sumamos la cantidad */
            if (num == id) {
                console.log("Ya se agregó");
                /* Recorremos el arreglo del Carrito y buscamos que id es igual al id 
                capturado, una vez encontrado estaremos dentro del arreglo del Producto
                y solo faltaría sumarle las cantidades */
                for (let i = 0; i < arregloCarrito.length; i++) {
                    if (arregloCarrito[i][0] == id) {
                        arregloCarrito[i][4] += cantidad;
                    }
                    console.log(arregloCarrito);
                }
                carro.insertarCarrito(arregloCarrito);
            }
            /* Si el número de id no está en el array, le agregamos el
            producto con sus datos en un array, y luego lo agregamos
            en el array del carrito de compras */
            else {
                array.push(id);
                array.sort();
                contador++;
                contadorCarrito.style.display = "block";
                contadorCarrito.textContent = contador;
                arregloProducto.push(infoProductos[i]["id"]);
                arregloProducto.push(infoProductos[i]["img"]);
                arregloProducto.push(infoProductos[i]["nombre"]);
                arregloProducto.push(infoProductos[i]["precio"]);
                arregloProducto.push(cantidad);

                arregloCarrito.push(arregloProducto);

                /* console.log(arregloProducto); */
                console.log(arregloCarrito);
                carro.insertarCarrito(arregloCarrito);
            }
            console.log(array);

            /* Usamos un for para Calcular el Precio Total, recorrienco todos los
                arreglos de productos y multiplicando su precio y cantidad */
            totalCompra = 0;
            for (let i = 0; i < arregloCarrito.length; i++) {
                totalCompra += arregloCarrito[i][3] * arregloCarrito[i][4];
            }
            precioTotal.textContent = `S/ ${totalCompra}`;
            console.log(totalCompra);

            /* console.log(contador); */
            /* console.log(infoArticulos[i]); */

            //Agregamos los datos del archivo productos.js
            /* carro.insertarCarrito(infoArticulos[id - 1], cantidad); */

            /* agregarAlCarrito(id); */
        });
    }

    for (let i = 0; i < eliminarArticulo.length; i++) {
        eliminarArticulo[i].addEventListener('click', () => {
            console.log("Click en eliminar");
        })
    }

    vaciarCarrito.addEventListener("click", (e) => {
        contador = 0;
        /* console.log(contador); */
        contadorCarrito.textContent = contador;
        carro.vaciarCarrito(e);
    });

}