class Carrito {
    //muestra producto seleccionado en carrito
    insertarCarrito(articulo, cant) {
        const row = document.createElement('tr');
        /* row.classList.add('articulo'); */
        row.innerHTML = `
            <th scope="row"><img src="${articulo.img}" style="width: 150px; height:80px"></th>
            <td><h4>${articulo.nombre}</h4></td>
            <td><h4>${articulo.precio}</h4></td>
            <td><h4>${cant}</h4></td>
            <td><h4>${articulo.precio * cant}</h4></td>
            <td><span class="fa fa-trash eliminar" id="eliminar${articulo.id}"></span></td>
        `;

        listaProductos.appendChild(row);

        /* let arrayId = [0];
        let id = 0;
        for (let i = 0; i < arrayId.length; i++) {
            id = articulo.id;
            console.log(id);
            console.log(arrayId[i]);
            if (id == arrayId[i]){
                console.log("Ya se agregó el articulo");
            }else{
                listaProductos.appendChild(row);
                arrayId.push(articulo.id);
                console.log(arrayId);
            }
        } */
        /* this.guardarProductosLocalStorage(producto); */
    }

    actualizarCarrito(arreglo) {
        listaProductos.innerHTML = ""; //Cada vez que yo llame a actualizarCarrito, lo primero q hago
        //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
        //actualizado
        //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

        //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
        arreglo.forEach((prod) => {
            const row = document.createElement('tr');
            /* row.classList.add('articulo'); */
            row.innerHTML = `
            <th scope="row"><img src="${prod[1]}" style="width: 150px; height:80px"></th>
            <td><h4>${prod[2]}</h4></td>
            <td><h4>${prod[3]}</h4></td>
            <td><h4>${prod[4]}</h4></td>
            <td><h4>${prod[3] * prod[4]}</h4></td>
            <td><span class="fa fa-trash eliminar" id="eliminar${prod[0]}"></span></td>
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