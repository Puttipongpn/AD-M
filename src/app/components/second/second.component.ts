import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl(''),
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required,Validators.min(1),Validators.max(50)]),
    price: new FormControl('',[Validators.required,Validators.min(1),Validators.max(1000000)])
  })

  productType: string[] = ['CPU','RAM','HDD','Mainbord']

  constructor(private productService: ProductService){ }

  addProduct(){
    this.productService.products.push(this.productForm.value)
    alert("Add product to database successfully")
  }

  ngOnInit(): void {
  }

  get id() { return this.productForm.get('id');}
  get name() { return this.productForm.get('name');}
  get quantity() { return this.productForm.get('quantity');}
  get price() { return this.productForm.get('price');}
  
}
