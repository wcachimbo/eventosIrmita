import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from '../../assets/data/productos.json';// Asegúrate de que la ruta sea correcta
import { Productos } from './productos'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Productos[] = [];

  ngOnInit(): void {
    this.productos = PRODUCTOS;
  }
}
