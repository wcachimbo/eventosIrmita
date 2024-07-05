import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.css']
})
export class BuysComponent implements OnInit {
  items$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.getItems();
  }

  ngOnInit(): void {}
}
