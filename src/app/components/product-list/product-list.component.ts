import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products;
  constructor(product_service:ProductsService) {
      this.products = product_service.getallproducts();
   }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

