import { tap } from 'rxjs/operators';
import { getCurrentProduct, getShowProductCode, getProducts, getError } from './../state/product.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../state/product.action'

// import { Subscription, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { State } from '../state/product.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;
  errorMessage$:Observable<string>
products$: Observable<Product[]>
selectedProduct$: Observable<Product>
displayCode$: Observable<boolean>
 

  constructor(private store:Store<State>  ) { }

  ngOnInit(): void {
 
      this.products$ = this.store.select(getProducts) 

      this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductActions.loadProducts());

    this.selectedProduct$ =  this.store.select(getCurrentProduct) 

 this.displayCode$ =    this.store.select(getShowProductCode) 
  }
  

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode())

  }

  newProduct(): void {

    this.store.dispatch(ProductActions.initializeCurrentProduct())
  }

  productSelected(product: Product): void {
    
this.store.dispatch(ProductActions.setCurrentProduct({currentProductId :product.id}) )


  }

}
