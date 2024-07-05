// src/app/buys/buys.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Productos } from '../productos/productos';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.css']
})
export class BuysComponent implements OnInit {
  items: Productos[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
