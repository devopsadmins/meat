import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

paymentOptions: RadioOption[] = [
  {label: 'Dinheiro', value: 'MON'},
  {label: 'Cartão de Débito', value: 'DEB'},
  {label: 'Cartão de Refeição', value: 'REF'}
]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }
  cartItems() {
    return  this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    return  this.orderService.increaseQty(item);
  }
  decreaseQty(item: CartItem) {
    return  this.orderService.decreaseQty(item);
  }
  demove(item: CartItem) {
    return  this.orderService.removeItem(item);
  }

}
