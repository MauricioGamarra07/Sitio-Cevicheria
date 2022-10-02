class Carrito {
    //muestra producto seleccionado en carrito
    insertarCarrito(articulo, cant) {
        const row = document.createElement('tr');
        /* row.classList.add('articulo'); */
        row.innerHTML = `
            <td data-label="Imagen"><img src="${articulo.img}" style="width: 150px; height:80px"></td>
            <td data-label="Plato"><h4>${articulo.nombre}</h4></td>
            <td data-label="Precio"><h4>${articulo.precio}</h4></td>
            <td data-label="Cantidad"><h4>${cant}</h4></td>
            <td data-label="Total"><h4>${articulo.precio * cant}</h4></td>
            <td data-label="Eliminar"><span class="fa fa-trash eliminar" id="eliminar${articulo.id}"></span></td>
        `;

        listaProductos.appendChild(row);

    }

    actualizarCarrito(arreglo) {
        listaProductos.innerHTML = ""; //Cada vez que yo llame a actualizarCarrito, lo primero q hago
        //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
        //actualizado
        arreglo.forEach((prod) => {
            const row = document.createElement('tr');
            /* row.classList.add('articulo'); */
            row.innerHTML = `
            <td data-label="Imagen"><img src="${prod[1]}" style="width: 150px; height:80px"></td>
            <td data-label="Plato"><h4>${prod[2]}</h4></td>
            <td data-label="Precio"><h4>${prod[3]}</h4></td>
            <td data-label="Cantidad"><h4>${prod[4]}</h4></td>
            <td data-label="Total"><h4>${prod[3] * prod[4]}</h4></td>
            <td data-label="Eliminar"><span class="fa fa-trash eliminar" id="eliminar${prod[0]}"></span></td>
        `;
            listaProductos.appendChild(row);

            /* localStorage.setItem('carrito', JSON.stringify(arregloCarrito)); */
        })
    }

    //Elimina todos los productos
    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();

        return false;
    }

    //Eliminar todos los datos del LS
    vaciarLocalStorage() {
        localStorage.clear();
    }
}