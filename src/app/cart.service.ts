import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Productos } from './productos/productos';

export interface CartItem {
  product: Productos;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$: Observable<CartItem[]> = this.itemsSubject.asObservable();

  addToCart(product: Productos): void {
    const items = this.itemsSubject.value;
    const existingItem = items.find(item => item.product.nombre === product.nombre);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ product, quantity: 1 });
    }

    this.itemsSubject.next(items);
  }

  removeFromCart(product: Productos): void {
    const items = this.itemsSubject.value.filter(item => item.product.nombre !== product.nombre);
    this.itemsSubject.next(items);
  }

  updateQuantity(product: Productos, quantity: number): void {
    const items = this.itemsSubject.value;
    const existingItem = items.find(item => item.product.nombre === product.nombre);

    if (existingItem) {
      existingItem.quantity = quantity;
    }

    this.itemsSubject.next(items);
  }

  clearCart(): void {
    this.itemsSubject.next([]);
  }

  getItemCount(): Observable<number> {
    return this.items$.pipe(
      map(items => items.reduce((acc, item) => acc + item.quantity, 0))
    );
  }
}
