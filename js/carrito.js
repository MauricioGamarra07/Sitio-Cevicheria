class Carrito {

    //Añadir producto al carrito
    /* comprarProducto(e) {
        e.preventDefault();
        //Delegado para agregar al carrito
        if (e.target.classList.contains('boton-agregar')) {
            const producto = e.target.parentElement.parentElement;
            //Enviamos el producto seleccionado para tomar sus datos
            this.leerDatosProducto(producto);
            this.insertarCarrito(productosEntrada);
        }
    }*/

    //Leer datos del producto
    /* leerDatosProducto(producto) {
        let infoProducto = {
            imagen: producto.querySelector('#img-producto').src,
            nombre: producto.querySelector('h3').textContent,
            precio: producto.querySelector('.precio').textContent,
            id: producto.querySelector('button').getAttribute('id'),
            cantidad: 1
        }
        this.insertarCarrito(infoProducto);

        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS) {
            if (productoLS.id === infoProducto.id) {
                productosLS = productoLS.id;
            }
        });

        if (productosLS === infoProducto.id) {
            Swal.fire({
                type: 'info',
                title: 'Oops...',
                text: 'El producto ya está agregado',
                showConfirmButton: false,
                timer: 1000
            })
        }
        else {
            this.insertarCarrito(infoProducto);
        }

    } */

    //muestra producto seleccionado en carrito
    insertarCarrito(producto, cant) {
        const row = document.createElement('tr');
        /* row.classList.add('producto'); */
        row.innerHTML = `
            <th scope="row"><img src="${producto.img}" style="width: 150px; height:80px"></th>
            <td><h4>${producto.nombre}</h4></td>
            <td><h4>${producto.precio}</h4></td>
            <td><h4>${cant}</h4></td>
            <td><h4>${producto.precio*cant}</h4></td>
        `;
        listaProductos.appendChild(row);
        /* this.guardarProductosLocalStorage(producto); */
    }

    //Eliminar el producto del carrito en el DOM
    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('span').getAttribute('id');
        }
        this.eliminarProductoLocalStorage(productoID);
        /* this.calcularTotal(); */
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

    //Almacenar en el LS


    guardarProductosLocalStorage(producto) {
        let productos;
        //Toma valor de un arreglo con datos del LS
        productos = this.obtenerProductosLocalStorage();
        //Agregar el producto al carrito
        productos.push(producto);
        //Agregamos al LS
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    //Comprobar que hay elementos en el LS
    obtenerProductosLocalStorage() {
        let productoLS;

        //Comprobar si hay algo en LS
        if (localStorage.getItem('productos') === null) {
            productoLS = [];
        }
        else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    //Mostrar los productos guardados en el LS
    leerLocalStorage() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            //Construir plantilla
            const row = document.createElement('tr');
            row.innerHTML = `
                <div>
                    <img src="${producto.imagen}" width=100>
                    <p>${producto.nombre}</p>
                    <p>${producto.precio}</p>
                </div>
                <a href="#" class="borrar-producto fas fa-times-circle"></a>
            `;
            listaProductos.appendChild(row);
        });
    }

    //Mostrar los productos guardados en el LS en compra.html
    leerLocalStorageCompra() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            const div = document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                <img src="${producto.img}">
                <h4>${producto.nombre}</h4>
                <h4>${producto.precio}</h4>
                <h4>${producto.stock}</h4>
                <span class="fa fa-trash borrar-producto" id="${producto.id}"></span>
            `;
            listaCompra.appendChild(row);
        });
    }

    //Eliminar producto por ID del LS
    eliminarProductoLocalStorage(productoID) {
        let productosLS;
        //Obtenemos el arreglo de productos
        productosLS = this.obtenerProductosLocalStorage();
        //Comparar el id del producto borrado con LS
        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id === productoID) {
                productosLS.splice(index, 1);
            }
        });

        //Añadimos el arreglo actual al LS
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    //Eliminar todos los datos del LS
    vaciarLocalStorage() {
        localStorage.clear();
    }

}