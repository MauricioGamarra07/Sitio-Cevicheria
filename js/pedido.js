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
            /* console.log(inputValue); */
            newValue = parseInt(inputValue) + 1;
            input.value = newValue;
            /* console.log(newValue); */
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
        });
    }

    let cantidadArt = 0;
    let totalCompra = 0;
    let contador = 0;
    let array = [0]; //Array de los Id's
    for (let i = 0; i < agregar.length; i++) {
        agregar[i].addEventListener('click', () => {
            cantidadArt = parseInt(newValue);
            console.log(cantidadArt);

            //Capturamos el numero de id que est?? en su atributo id
            let id = parseInt(agregar[i].getAttribute('id'));
            console.log(id);

            //Buscamos en el array un n??mero igual que el id capturado
            let num = array.find(item => item == id);
            console.log(num);

            let arregloProducto = []; //Array donde agregaremos los productos 1 por 1


            /* Si el numero buscado en el array de Id's es igual al id
            capturado significa que ya se agreg?? el producto, por ello
            solo le sumamos la cantidadArt */
            if (num == id) {
                console.log("Ya se agreg??");
                /* Recorremos el arreglo del Carrito y buscamos que id es igual al id 
                capturado, una vez encontrado estaremos dentro del arreglo del Producto
                y solo faltar??a sumarle las cantidadArtes */
                for (let i = 0; i < arregloCarrito.length; i++) {
                    if (arregloCarrito[i][0] == id) {
                        arregloCarrito[i][4] += cantidadArt;
                    }
                    console.log(arregloCarrito);
                }
                carro.insertarCarrito(arregloCarrito);
            }
            /* Si el n??mero de id no est?? en el array, le agregamos el
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
                arregloProducto.push(cantidadArt);

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

    /* for (let a = 0; a < eliminarArticulo.length; a++) {
        eliminarArticulo[a].addEventListener('click', () => {
            console.log("Click en eliminar");
        })
    } */

    vaciarCarrito.addEventListener("click", (e) => {
        contador = 0;
        /* console.log(contador); */
        contadorCarrito.textContent = contador;
        carro.vaciarCarrito(e);
    });

}