// src/app/productos/productos.component.ts
import { Component } from '@angular/core';
import { PRODUCTOS } from '../../assets/data/productos.json';
import { Productos } from './productos';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = PRODUCTOS;

  constructor(private cartService: CartService) {}

  addToCart(producto: Productos) {
    if (producto.disponibilidad === 'Disponible') {
      this.cartService.addToCart(producto);
      console.log('Producto añadido al carrito:', producto);
    }
  }
}
