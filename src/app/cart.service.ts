// src/app/cart.service.ts
import { Injectable } from '@angular/core';
import { Productos } from './productos/productos';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Productos[] = [];
  private itemsCount = new BehaviorSubject<number>(0);

  addToCart(product: Productos) {
    this.items.push(product);
    this.itemsCount.next(this.items.length);
  }

  getItems() {
    return this.items;
  }

  getItemCount() {
    return this.itemsCount.asObservable();
  }

  clearCart() {
    this.items = [];
    this.itemsCount.next(0);
    return this.items;
  }
}
