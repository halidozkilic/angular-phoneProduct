import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent  {

  products;
  repository:ProductRepository;
  

  constructor() { 
    this.repository=new ProductRepository();
    this.products=this.repository.getProducts();

  }

 
}
