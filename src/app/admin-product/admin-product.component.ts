import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent  {

  products;
  repository:ProductRepository;
  selectedProduct:Product;

  

  constructor() { 
    this.repository=new ProductRepository();
    this.products=this.repository.getProducts();

  }

  getSelected(product:Product):boolean{
    return product===this.selectedProduct;
  }

  editProduct(product:Product){
    this.selectedProduct=product; 
  }
  
  saveChanges(){
    
    let p= this.repository.getProductById(this.selectedProduct.id);
    p.name=this.selectedProduct.name;
    p.price=this.selectedProduct.price;
    p.imageUrl=this.selectedProduct.imageUrl;
    p.description=this.selectedProduct.description;
    this.selectedProduct=null;


  }
  deleteProduct(product:Product)
  {
    this.repository.deleteProduct(product);
    this.selectedProduct=null;
    
  }

 
}
