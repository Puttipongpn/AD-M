import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { productsModel } from 'src/app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart!:productsModel
  constructor(private cartService:CartService ) {
    this.cart = this.cartService.getcart()
  }

  ngOnInit(): void {
  }

  getSumprice(){
    return this.cartService.total;
  }
}
