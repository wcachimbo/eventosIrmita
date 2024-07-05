// productos.component.ts
import { Component } from '@angular/core';
import { PRODUCTOS } from '../../assets/data/productos.json';
import { Productos } from './productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = PRODUCTOS;

  addToCart(producto: Productos) {
    if (producto.disponibilidad === 'Disponible') {
      console.log('Producto añadido al carrito:', producto);
      // Aquí puedes agregar la lógica para añadir el producto al carrito
    }
  }
}
