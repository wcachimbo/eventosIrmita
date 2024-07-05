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
  private itemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  items$: Observable<CartItem[]> = this.itemsSubject.asObservable();

  constructor() {}

  addToCart(product: Productos): void {
    const currentItems = this.itemsSubject.value;
    const itemIndex = currentItems.findIndex(item => item.product.nombre === product.nombre);

    if (itemIndex !== -1) {
      currentItems[itemIndex].quantity++;
    } else {
      currentItems.push({ product, quantity: 1 });
    }

    this.itemsSubject.next(currentItems);
  }

  getItems(): Observable<CartItem[]> {
    return this.items$;
  }

  getItemCount(): Observable<number> {
    return this.items$.pipe(map((items: CartItem[]) => items.reduce((acc, item) => acc + item.quantity, 0)));
  }
}