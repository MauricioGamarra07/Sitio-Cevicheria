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

const contadorCarrito = document.getElementById("contador");

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


    let contador = 0;
    let array = [0];
    for (let i = 0; i < agregar.length; i++) {
        agregar[i].addEventListener('click', (e) => {
            let cantidad = parseInt(newValue);
            /* console.log(cantidad); */

            let id = parseInt(agregar[i].getAttribute('id'));
            console.log(id);

            let num = array.find(item => item == id);
            console.log(num);

            let arregloProducto = [];

            if (num == id){
                console.log("Ya se agregó");
                for (let i = 0; i < arregloCarrito.length; i++){
                    if (arregloCarrito[i][0] == id){
                        arregloCarrito[i][4] += cantidad;
                    }
                    console.log(arregloCarrito);
                }
                carro.actualizarCarrito(arregloCarrito);
            }else{
                array.push(id);
                array.sort();
                contador ++;
                contadorCarrito.textContent = contador;
                arregloProducto.push(infoProductos[i]["id"]);
                arregloProducto.push(infoProductos[i]["img"]);
                arregloProducto.push(infoProductos[i]["nombre"]);
                arregloProducto.push(infoProductos[i]["precio"]);
                arregloProducto.push(cantidad);
                arregloCarrito.push(arregloProducto);
                /* console.log(arregloProducto); */
                console.log(arregloCarrito);
                carro.insertarCarrito(infoProductos[id - 1], cantidad);
            }
            console.log(array);
            /* console.log(contador); */
            /* console.log(infoArticulos[i]); */

            //Agregamos los datos del archivo productos.js
            /* carro.insertarCarrito(infoArticulos[id - 1], cantidad); */

            /* agregarAlCarrito(id); */
        });
    }

    vaciarCarrito.addEventListener("click", (e) => {
        carro.vaciarCarrito(e);
    });

}