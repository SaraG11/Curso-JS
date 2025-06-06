function crearIterador(carrito){
    let i = 0;

    return {
        siguiente: () => {
            const fin = ( i >= carrito.lenght );
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}


const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

const recorrerCarrito = crearIterador(carrito)

console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())