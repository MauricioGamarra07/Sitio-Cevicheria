const contProductos = document.querySelector(".contenedor-productos");

colocarProductos(infoProductos)

function colocarProductos(producto) {

    for (let i = 0; i < producto.length; i++) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto[i].img}">
            <p>Platillo: ${producto[i].nombre}</p>
            <p>Precio: S/${producto[i].precio}</p>
            <div class="btn-group mb-3">
                <button type="button" class="btn btn-outline-primary boton-menos">-</button>
                <input type="text" class="cantidad" name="cant" value="1" id="1" style="width:60px">
                <button type="button" class="btn btn-outline-primary boton-mas">+</button>
            </div>  
            <button type="button" class="btn btn-primary agregar" id="${producto[i].id}">Agregar al carrito</button>
       `;
        contProductos.appendChild(div);
    }
}