import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartService, CartItem } from '../cart.service';
import { Productos } from '../productos/productos';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.css']
})
export class BuysComponent implements OnInit {
  checkoutForm: FormGroup;
  items$: Observable<CartItem[]>;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      date: '',
      phone: '',
      address: '',
      description: ''
    });
    this.items$ = this.cartService.items$;
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // Proceso de envío de pedido aquí
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.cartService.clearCart();
  }

  updateQuantity(product: Productos | undefined, quantity: any): void {
    if (product) {
      const quantityValue = Number(quantity);
      this.cartService.updateQuantity(product, quantityValue);
    }
  }

  removeFromCart(product: Productos | undefined): void {
    if (product) {
      this.cartService.removeFromCart(product);
    }
  }
}