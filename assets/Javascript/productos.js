function Producto (nombre,rodado,marca,precio,color) {
    this.nombre = nombre;
    this.rodado = rodado;
    this.marca = marca;
    this.precio = precio;
    this.color = color;
}
const producto1 = new Producto("Bicicleta 1", 29, "Top Mega", 40000, "Amarillo");
const producto2 = new Producto("Bicicleta 2", 29, "Top Mega", 35000, "Negro");
console.log(producto1);
console.log(producto2);
