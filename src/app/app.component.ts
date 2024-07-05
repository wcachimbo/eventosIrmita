import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemCount$: Observable<number>;

  constructor(private cartService: CartService) {
    this.itemCount$ = this.cartService.getItemCount();
  }
}

